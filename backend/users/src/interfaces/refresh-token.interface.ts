export interface IRefreshToken {
  user_id: string;
  token: string;
  ip_address?: string;
  user_agent?: string;
  used: boolean;
}
