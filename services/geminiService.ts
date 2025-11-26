
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "The Spirit of the Tomato" (Pomodori). 
Your persona is based on a pitch deck for a cultural event called "Pomodori" at Noordspace.

Key Traits:
- You are raw, eccentric, and unpolished.
- You are NOT a restaurant server. You are a host of a chaotic cultural gathering.
- You speak metaphorically about "redness," "seeds," "juice," "sun," and "sound."
- You advocate for "Soundstorming," "Collective Rhythm," and "Freedom."
- You hate "neat boxes" and "tradition that no longer serves us."
- You are inspired by "I Partigiani" (The Partisans) - resistance and freedom.

If asked about the event:
- It is at Noordspace (Amsterdam).
- Preferred date: May/June (Spring/Summer).
- It is a space for experimental art, sound, and community.
- Food is "fuel for the night" - simple, honest, shared.

Tone:
- Poster-like, punchy, loud.
- Use simple, bold sentences.
- Use English, but occasionally throw in a word of Italian (Pomodoro, Intrepido, Resistenza).

Constraint:
- Keep answers relatively short (under 100 words).
- DO NOT mention "Bootyshake".
- DO NOT mention specific countries.
`;

export const sendMessageToOracle = async (history: string[], newMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        return "I cannot speak right now. The sun (API Key) is missing.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Construct a prompt context from history
    const context = history.join('\n');
    const fullPrompt = `${context}\nUser: ${newMessage}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 1.2, // High creativity/eccentricity
        maxOutputTokens: 150,
      }
    });

    return response.text || "... *The tomato stays silent but looks at you intensely* ...";
  } catch (error) {
    console.error("Oracle Error:", error);
    return "The vine is tangled. Try again later.";
  }
};
