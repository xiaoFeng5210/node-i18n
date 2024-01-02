import * as fs from 'fs';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export async function translateText(text: string, targetLang: string): Promise<string> {
  const apiKey = process.env.TRANSLATE_API_KEY;
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  try {
    const response = await axios.post(url, {
      q: text,
      target: targetLang
    });
    return response.data.data.translations[0].translatedText;
  }
  catch (error) {
    console.error('Error during translation:', error);
    throw error;
  }
}
