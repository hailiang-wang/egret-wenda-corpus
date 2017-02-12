# Egret Wenda Corpus
QA Corpus, based on [egret bbs](http://bbs.egret.com/).

NOTE: If you have results to report on these corpora, please send email to hain_wang@foxmail.com so I can add you to list of people using this data.  Thanks!


DESCRIPTION:

In all files the field separator is " +++$+++ "

## egret\_wenda_lines.txt
	- contains the actual text of each utterance
	- fields:
		- lineID
		- person id (who uttered this phrase)
		- text of the utterance

## egret\_wenda_conversations.txt
	- the structure of the conversations
	- fields
		- conversationId
		- person id of the first character involved in the conversation
		- person id of the second character involved in the conversation
		- date of the post
		- source of this conversation in URL
		- list of the utterances that make the conversation, in chronological 
			order: ['lineID1','lineID2']
			has to be matched with egret\_wenda_lines.txt to reconstruct the actual content

# What's more
**egret\_wenda_conversations_raw.txt** and **egret\_wenda_conversations_raw.txt** are raw data from BBS.
To make it more suitable for training, I have personally reviewed the raw data and modify some utterances, such as deleting codes in utterances.