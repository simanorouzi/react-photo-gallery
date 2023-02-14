import React = require('react');

export type AlbumType = {
  title: string;
  id: number;
  userId: number;
};

export type ToastType = {
  onConfirm: () => void;
  children?: React.ReactNode;
};

export type PhotoType = {
  title: string;
  thumbnailUrl: string;
  url: string;
  id: number;
  albumId: number;
};

export type UseHttpType = {
  url: string;
  request: HttpRequestType;
  applyFunction: (data) => void;
};

export type HttpRequestType = {
  methodType: method;
  body?: string;
  headers?: {
    [key: string]: string;
  };
};

export enum method {
  Get = 0,
  Post = 1,
}

export type FetchOutputType = {
  data: any;
  isLoading: boolean;
  error: string;
};
