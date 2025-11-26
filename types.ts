
export interface ManifestoItem {
  title: string;
  description: string;
  color: string;
  textColor: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
