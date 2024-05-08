import React, { useEffect, useState } from "react";

type Props = {
  handlerData?: unknown;
  onComplete: (data: unknown) => void;
  onErrored: (error: Error) => void;
  failureMessage?: string;
  canRetry: boolean;
};

const Loader = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    const run = async () => {
      if (isLoading) {
        try{
            setIsLoading(false);
        }catch(err){
            setIsErrored(true);
        }
      }
    };

    run();
  }, [isLoading, props]);

  const retryAsync = async () => {
    setIsLoading(true);
    setIsErrored(false);
  };

  return (
    <>
      {isLoading && (
        <span className="loading loading-spinner loading-md">
            <span>Loading...</span>
        </span>
      )}
      {isErrored && (
        <div>
          {props.failureMessage ? props.failureMessage : <span>"Erro ao carregar os components"</span>}
          {props.canRetry && (
            <button className="btn btn-ghost" onClick={() => retryAsync()}>Retry</button>
          )}
        </div>
      )}
    </>
  );
};

export default Loader;