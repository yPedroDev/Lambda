import React from "react";

const TypewriteContent = React.lazy(() => import("./TypewriterContent"));
const Loader = React.lazy(() => import("../../../components/loader/Loader"));

type Props = React.ComponentProps<"button"> & {
  text: string;
  typingSpeed: number;
}

const Typewriter = (props: Props) => {
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
          text={props.text != null ? props.text : ""}
        />
      </React.Suspense>
    </>
  );
};

export default Typewriter;