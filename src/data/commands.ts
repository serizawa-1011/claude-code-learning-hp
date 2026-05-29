export type CommandCategory = "スラッシュコマンド" | "CLI" | "キーバインド";

export interface CommandEntry {
  command: string;
  category: CommandCategory;
  description: string;
}

// 一般によく知られた範囲の代表的なコマンドのみ掲載。
export const commands: CommandEntry[] = [
  // スラッシュコマンド（対話中に入力）
  { command: "/help", category: "スラッシュコマンド", description: "使い方とコマンド一覧を表示する" },
  { command: "/clear", category: "スラッシュコマンド", description: "会話の文脈をクリアして新しく始める" },
  { command: "/init", category: "スラッシュコマンド", description: "リポジトリを解析して CLAUDE.md を生成する" },
  { command: "/review", category: "スラッシュコマンド", description: "変更内容（diff）をレビューしてもらう" },
  { command: "/config", category: "スラッシュコマンド", description: "テーマやモデルなどの設定を変更する" },
  { command: "/model", category: "スラッシュコマンド", description: "使用するモデルを切り替える" },
  { command: "/cost", category: "スラッシュコマンド", description: "現在のセッションのトークン使用量・コストを表示する" },
  { command: "/compact", category: "スラッシュコマンド", description: "会話履歴を要約して文脈を圧縮する" },

  // CLI（ターミナルで起動）
  { command: "claude", category: "CLI", description: "対話セッションを起動する" },
  { command: "claude \"<prompt>\"", category: "CLI", description: "プロンプトを渡して起動する" },
  { command: "claude -c", category: "CLI", description: "直前のセッションを再開する（continue）" },
  { command: "claude -p \"<prompt>\"", category: "CLI", description: "非対話モードで実行し結果を出力する（print）" },
  { command: "claude update", category: "CLI", description: "Claude Code を最新版に更新する" },
  { command: "npm install -g @anthropic-ai/claude-code", category: "CLI", description: "Claude Code をインストールする" },

  // キーバインド（対話中）
  { command: "Esc", category: "キーバインド", description: "実行中の処理を中断する" },
  { command: "Esc → Esc", category: "キーバインド", description: "履歴をさかのぼってメッセージを編集する" },
  { command: "Shift + Tab", category: "キーバインド", description: "モード（通常 / 自動承認 / 計画）を切り替える" },
  { command: "Ctrl + C", category: "キーバインド", description: "入力のクリア、または終了" },
  { command: "↑ / ↓", category: "キーバインド", description: "入力履歴を移動する" },
];
