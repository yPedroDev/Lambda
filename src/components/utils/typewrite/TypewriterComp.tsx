import React, { ComponentProps } from "react";

const TypewriteContent = React.lazy(() => import("./TypewriterContent"));
const Loader = React.lazy(() => import("../../../components/loader/Loader"));

type Props = ComponentProps<"h1"> & {
  text: string;
  typingSpeed: number;
}

const Typewriter = ({text, typingSpeed, ...props}: Props) => {
  return (
    <>
      <React.Suspense
        fallback={
          <Loader
            failureMessage="Falha ao carregar!"
            canRetry={true}
            onComplete={() => console.log("Completo o carregamento!")}
            onErrored={() => console.log("Erro ao completar o carregamento!")}
          ></Loader>
        }
      >
        <TypewriteContent
          {...props}
          content={text != null ? text : ""}
        />
      </React.Suspense>
    </>
  );
};

export default Typewriter;