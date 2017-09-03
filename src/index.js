import { compileToLegacyIR } from "apollo-codegen/lib/compiler/legacyIR";
import CodeGenerator from "apollo-codegen/lib/utilities/CodeGenerator";
import { parse, buildClientSchema } from "graphql";
import { generateSource as generateFlowSource } from "apollo-codegen/lib/flow/codeGeneration";
import { generateSource as generateTSSource } from "apollo-codegen/lib/typescript/codeGeneration";

function setup(schema) {
  const context = {
    schema: schema,
    operations: {},
    fragments: {},
    typesUsed: {}
  };

  const generator = new CodeGenerator(context);

  const compileFromSource = source => {
    const document = parse(source);
    const context = compileToLegacyIR(schema, document, {
      mergeInFieldsFromFragmentSpreads: true,
      addTypename: true
    });
    generator.context = context;
    return context;
  };

  const addFragment = fragment => {
    generator.context.fragments[fragment.fragmentName] = fragment;
  };

  return { generator, compileFromSource, addFragment };
}

export default function transform(schema, query, type = "flow") {
  if (!query || !schema) {
    throw new Error("Make sure you have passed both schema and query");
  }
  const schemaData = JSON.parse(schema);

  if (!schemaData.data && !schemaData.__schema) {
    throw new Error(
      "GraphQL schema file should contain a valid GraphQL introspection query result"
    );
  }

  if (type !== "flow" && type !== "typescript") {
    throw new Error('Only "flow" and "typescript" types are supported.');
  }

  const generateSource =
    type === "flow" ? generateFlowSource : generateTSSource;

  const generatedSchema = buildClientSchema(
    schemaData.data ? schemaData.data : schemaData
  );

  const { compileFromSource } = setup(generatedSchema);

  const context = compileFromSource(query);

  return generateSource(context);
}
