import { Code, Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import InternalLink from '~/components/InternalLink';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import BasicUsageExample from '~/examples/BasicUsageExample';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'examples/basic-usage';

export const getStaticProps: GetStaticProps<{ code: string }> = async () => ({
  props: { code: (await readCodeExample('examples/BasicUsageExample.tsx')) as string },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        In its most basic usage scenario, the <Code>showContextMenu</Code> function only requires an <Code>items</Code>{' '}
        array to be provided.
        <br />
        Each item in the array must be an object with a unique <Code>key</Code> and an <Code>onClick</Code> handler.
        <br />
        For each item, a title will be automatically generated by “humanizing” the <Code>key</Code> value.
        <br />
        The <Code>onClick</Code> handler will be called when the user clicks on the corresponding menu item.
      </PageText>
      <CodeBlock language="typescript" content={code} />
      <PageText>Right-click on the image to trigger the context menu:</PageText>
      <BasicUsageExample />
      <PageText>
        However, <InternalLink to="/type-definitions">there’s more</InternalLink> you can do with{' '}
        <Code>Mantine ContextMenu</Code>.
        <br />
        Head over to the next example to discover other features.
      </PageText>
      <PageNavigation of={PATH} />
    </Container>
  );
}