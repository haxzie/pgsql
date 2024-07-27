import React, { useState } from "react";
import EditorLayout from "../../layouts/EditorLayout";
import { PanelGroup, Panel } from "react-resizable-panels";
import Editor from "../Editor/Editor";
import ResultViewer from "../ResultViewer/ResultViewer";
import { useDatabase } from "../../../store/Database";
import { Results } from "@electric-sql/pglite";

export default function EditorArea() {
  const [result, setResult] = useState<Results<unknown>>();
  const [isQuerying, setIsQuerying] = useState(false);
  const [error] = useState<unknown | any>();
  const { runQuery } = useDatabase();

  const run = async (query: string) => {
    setIsQuerying(true);
    const { result, error } = await runQuery({ query });
    console.log({ result, error });
    setResult(result);
    setIsQuerying(false);
    // setError(error.message);
  };
  return (
    <EditorLayout>
      <PanelGroup direction="vertical">
        <Panel id="editor" minSize={25} order={1}>
          <Editor
            onClickRun={run}
            affectedRows={result?.affectedRows}
            isQuerying={isQuerying}
          />
        </Panel>
        <Panel id="result" minSize={25} order={2}>
          <ResultViewer result={result} error={error} isQuerying={isQuerying} />
        </Panel>
      </PanelGroup>
    </EditorLayout>
  );
}
