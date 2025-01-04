export interface GenerateImageRequestBody {
  id: string;
  userId?: number;
  prompt: string;
  qty: number;
  negativePrompt: string;
  height: number;
  width: number;
  steps: number;
  promptGuidance: number;
  seed: number;
  sampler: string;
  taskId?: string;
}
