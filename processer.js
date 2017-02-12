/**
 * Process data
 */
const config = require('./config/environment')
const parseproxy = require('parseproxy')
const co = require('co')
const fs = require('fs')
const path = require('path')
const util = require('util')
parseproxy.init(config.app.serverURL, config.app.appId, config.app.javascriptKey)
const EgretWendaClass = parseproxy.getParseObject('EgretWenda')
const EgretWendaTotalQuery = parseproxy.getParseQuery(EgretWendaClass, [{
  ref: 'notEqualTo',
  key: 'answer_person_id',
  val: null
}])

LINES_TXT = path.join(__dirname, 'egret_wenda_lines_raw.txt')
CONVERSATIONS_TXT = path.join(__dirname, 'egret_wenda_conversations_raw.txt')

co(function * () {
  let totalCount = yield EgretWendaTotalQuery.count()
  let questionId = 0
  let lineIdIndex = 0
  let conversationIdIndex = 0
  for (let i = 0; i < totalCount / 1000; i++) {
    const query = parseproxy.getParseQuery(EgretWendaClass, [{
      ref: 'notEqualTo',
      key: 'answer_person_id',
      val: null
    }, {
      ref: 'limit',
      val: 1000
    }, {
      ref: 'skip',
      val: 1000 * i
    }])
    const results = yield query.find()
    results.forEach(function (val) {
      console.log('qid: ' + (questionId++) + ' >> ' + val.get('title'))
      let lin1 = lineIdIndex++
      let lin2 = lineIdIndex++
      let convId = conversationIdIndex++
      let title = val.get('title')
      let date = val.get('date')
      let url = val.get('url')
      let question = val.get('question')
      let question_person_id = val.get('question_person_id')
      let answer_text = val.get('answer_text')
      let answer_person_id = val.get('answer_person_id')

      // process lines
      fs.appendFileSync(LINES_TXT, util.format('%s +++$+++ %s +++$+++ %s\n',
        lin1,
        question_person_id,
        title))
      fs.appendFileSync(LINES_TXT, util.format('%s +++$+++ %s +++$+++ %s\n',
        lin2,
        answer_person_id,
        answer_text))

      // process conversations 
      fs.appendFileSync(CONVERSATIONS_TXT, util.format('%s +++$+++ %s +++$+++ %s +++$+++ %s +++$+++ %s +++$+++ [%d, %d]\n',
        convId,
        question_person_id,
        answer_person_id,
        date,
        url,
        lin1,
        lin2))
    })
  }
})
