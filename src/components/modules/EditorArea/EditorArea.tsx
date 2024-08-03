import { useState } from "react";
import EditorLayout from "../../layouts/EditorLayout";
import { PanelGroup, Panel } from "react-resizable-panels";
import Editor from "../Editor/Editor";
import ResultViewer from "../ResultViewer/ResultViewer";
import { useDatabase } from "../../../store/DB/Database";
import { QueryResult } from "../../../drivers/driver";

export default function EditorArea() {
  const [result, setResult] = useState<QueryResult>();
  const [isQuerying, setIsQuerying] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const { runQuery } = useDatabase();

  const run = async (query: string) => {
    setIsQuerying(true);
    const result = await runQuery({ query, saveQuery: true });
    setResult(result);
    setError(result?.error);
    setIsQuerying(false);

  };
  return (
    <EditorLayout>
      <PanelGroup direction="vertical">
        <Panel id="editor" minSize={25} order={1}>
          <Editor
            onClickRun={run}
            totalRows={result?.rows?.length}
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
