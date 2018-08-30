/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Math Facts';
const GET_FACT_MESSAGE = "Math fact: ";
const HELP_MESSAGE = 'You can say tell me a math fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'The Fibonacci sequence is encoded in the fraction 1 over 89.',
    'A pizza that has radius "z" and height "a" has volume Pie × z × z × "a". Which spells Pizza!',
    'The word hundred is derived from the word "hundrath", which actually means 120 and not 100.',
    '111,111,111 × 111,111,111 = 12,345,678,987,654,321.',
    'In a room of just 23 people there’s a 50% chance that two people have the same birthday.',
    'Zero is the only number that can\'t be represented in Roman numerals.',
    '(6 × 9) + (6 + 9) = 69.',
    'If you shuffle a pack of cards properly, chances are that exact order has never been seen before in the whole history of the universe.',
    'Zero is an even number.',
    'There\'s not enough space in the known universe to write out a googolplex on paper.',
    'The number 4 is considered unlucky in much of Asia.',
    '0.999999 continuous = 1',
    '555 is used by some in Thailand as slang for "hahaha", because the word for "five" is pronounced "ha".',
    'Any infinite set contains uncountably many nested subsets',
    'Ancient Babylonians did math in base 60 and not base 10, giving us 60 seconds in a minute, 360 degrees in a circle, etcetera',
    'The hairy ball theorem of algebraic topology states that there is no non-vanishing continuous tangent vector field on even-dimensional n-spheres. ' +
        'In simple terms: it\’s impossible to comb all the hairs on a tennis ball in the same direction without creating a cowlick.',
    'If you\'re on a gameshow where you select one of three doors to find a prize, and the host removes one of the remaining two doors, ' +
        'you should always switch doors. The odds are in your favor.',
    'According to the Friendship Paradox, your friends have more friends than you.',
    'Andrew Natarian is the developer of this Alexa Skill. He studied mathematics and computer science at the University of Maryland.'
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
