export interface LoginRequestBody {
  userEmail: string;
  password: string;
}

export interface SignUpRequestBody {
  userEmail: string;
  password: string;
}

export interface deleteUserRequestBody {
  reason: string | null;
}
