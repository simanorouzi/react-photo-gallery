import * as React from 'react';
import { FetchOutputType, method, UseHttpType } from '../Component/Types';

const UseHttpHook = async (props: UseHttpType) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  let response;
  let data;

  const fetch = async (props: UseHttpType) => {
    try {
      setIsLoading(true);

      if (props.request.methodType == method.Get) {
        response = await fetch(props.url);
      } else {
        const body = JSON.stringify(props.request.body);
        response = await fetch(props.url, {
          method: 'Post',
          headers: { 'Content-type': 'application/json' },
          body: body,
        });
      }
      if (!response.ok) {
        throw new Error('Something went Wrong!');
      }

      data = await response.json();
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const output: FetchOutputType = {
    data: data,
    error: error,
    isLoading: isLoading,
  };

  return {
    fetch,
    isLoading,
    error,
  };
};

export default UseHttpHook;
