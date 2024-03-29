/**
 * Used for connecting to OpenAI.
 * Provides connection, and response function wrapper
 * @author Christopher Curtis
 */
import OpenAI from 'openai';

// Creates an OpenAI connection using the provided api key
const openai = new OpenAI({
    apiKey: "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"
});


/**
 * Function for getting a response from the gpt model.
 * Uses the provided message history
 * @param messages the message history to load in
 * @returns gpt response object
 */
const getGptResonse =  async (messages) => await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
});

export default getGptResonse;