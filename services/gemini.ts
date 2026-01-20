
import { GoogleGenAI, Modality, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const chatWithGemini = async (message: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: message,
    config: {
      systemInstruction: "أنت المساعد الذكي لشركة 'نخبة ديجيتال'. تحدث باللهجة السعودية المهذبة والودودة. ساعد العملاء في اختيار الباقات وشرح الخدمات التسويقية.",
    },
  });
  return response.text;
};

export const generateMarketingImage = async (prompt: string, size: '1K' | '2K' | '4K' = '1K', aspectRatio: string = "1:1") => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: { parts: [{ text: prompt }] },
    config: {
      imageConfig: {
        aspectRatio: aspectRatio as any,
        imageSize: size as any
      }
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};

export const searchTrends = async (query: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `أعطني آخر صيحات التسويق في السعودية بخصوص: ${query}`,
    config: {
      tools: [{ googleSearch: {} }],
    },
  });
  
  const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => chunk.web?.uri).filter(Boolean) || [];
  return {
    text: response.text,
    sources
  };
};
