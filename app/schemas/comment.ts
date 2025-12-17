import { Id } from "@/convex/_generated/dataModel";
import z from "zod";

// Convex `Id<"posts">` is a branded string type. Use a Zod string
// and cast it to the branded type so inference from `zodResolver`
// returns the correct TypeScript type instead of `unknown`.
const postIdSchema = z.string() as unknown as z.ZodType<Id<"posts">>;

export const commentSchema = z.object({
  body: z.string().min(3),
  postId: postIdSchema,
});
