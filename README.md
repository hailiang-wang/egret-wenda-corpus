# 重要提示
训练机器学习模型，评测算法和交流，可以使用另外一个质量更好的语料库了 -
[机器学习保险行业问答开放数据集](https://github.com/Samurais/insuranceqa-corpus-zh)

# Egret Wenda Corpus
中文问答语料

QA Corpus, based on [egret bbs](http://bbs.egret.com/).

在做机器学习的过程中，训练问答机器人的过程往往需要高质量的数据。针对英文，有很多庞大的预料库，针对中文，公开的资料很少。
在学习的过程中，我接触到了[Ubuntu Dialogue Corpus](https://github.com/rkadlec/ubuntu-ranking-dataset-creator)，这也启发在技术社区挖掘出一些数据，制作语料。

目前这版语料，是从白鹭时代官方论坛问答板块**10,000+** 问题中，选择被标注了“最佳答案”的纪录汇总而成。

* 使用爬虫将目标数据存储到数据库
* 从数据库生成raw data
* 人工review raw data，给每一个问题，一个可以接受的答案。

目前，语料库包含**2907**个问答，虽然问题库很小，但针对一个垂直领域而言，也许足够了。

## DESCRIPTION

In all files the field separator is " +++$+++ "

### egret\_wenda_lines.txt
	- contains the actual text of each utterance
	- fields:
		- lineID
		- person id (who uttered this phrase)
		- text of the utterance

### egret\_wenda_conversations.txt
	- the structure of the conversations
	- fields
		- conversationId
		- person id of the first character involved in the conversation
		- person id of the second character involved in the conversation
		- date of the post
		- source of this conversation in URL
		- list of the utterances that make the conversation, in chronological 
			order: ['Question lineID','Answer lineID']
			has to be matched with egret_wenda_lines.txt to reconstruct the actual content

## What's more

### Data in *raw* are raw data from BBS.

To make it more suitable for training, I have personally reviewed the raw data and modify some utterances, such as deleting codes in utterances.

### processer.js

Generate raw data from data collection, the data collection is built with [Egret问答专区](http://bbs.egret.com/forum-94-1.html).

## Tips

NOTE: If you have results to report on these corpora, 
please send email to **hain_wang@foxmail.com**, 
so I can add you to list of people using this data.  

Thanks!
