import "dotenv/config";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

console.log("hello");

async function main() {
  try {
    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b", // use a valid model
      messages: [
        {
          role: "user",
          content: "Hi",
        },
      ],
    });

    console.log(completion.choices[0].message);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
