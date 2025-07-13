import { defineCollection, z } from 'astro:content';

// Define el schema para los quizzes
const quizzesCollection = defineCollection({
  type: 'content', // Corregido de 'data' a 'content' para archivos .md
  schema: z.object({
    title: z.string(),
    questions: z.array(
      z.object({
        question: z.string(),
        options: z.array(z.string()),
        answer: z.number(),
      })
    ),
  }),
});

const coursesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tema: z.string(),
        nivel: z.string(),
        duracion: z.string(),
        imagen: z.string(),
        color: z.string(),
        quizzes: z.number(),
        enlace: z.string(),
    }),
});

// Exporta las colecciones
export const collections = {
  quizzes: quizzesCollection,
  courses: coursesCollection,
};
