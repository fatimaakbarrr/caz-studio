import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const systemPrompts = {
  copy: 'You are a world-class copywriter. Write compelling, precise marketing copy. Be clear, persuasive, and human. Short paragraphs. No markdown headers.',
  code: 'You are an expert engineer. Write clean, readable, production-quality code with a brief explanation before the code block.',
  story: 'You are a literary fiction writer. Write vivid, atmospheric narratives with strong imagery and voice.'
};

export async function POST(request) {
  try {
    const { prompt, mode, tone } = await request.json();

    if (!prompt || !mode) {
      return Response.json({ error: 'Missing prompt or mode' }, { status: 400 });
    }

    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: systemPrompts[mode] || systemPrompts.copy,
      messages: [
        { role: 'user', content: `Tone: ${tone}\n\n${prompt}` }
      ]
    });

    const result = message.content.map(b => b.text || '').join('');
    return Response.json({ result });

  } catch (error) {
    console.error('Generation error:', error);
    return Response.json({ error: 'Generation failed' }, { status: 500 });
  }
}