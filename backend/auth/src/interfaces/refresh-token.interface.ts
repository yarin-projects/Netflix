export interface IRefreshToken {
  token: string;
  user_id: string;
  used: boolean;
  ip_address?: string;
  user_agent?: string;
}
