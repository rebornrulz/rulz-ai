import weaviate, { WeaviateClient, ApiKey } from 'weaviate-ts-client';

  const client: WeaviateClient = weaviate.client({
    scheme: 'https',
    host: 'rulz-ai-29ms7feo.weaviate.network',
    apiKey: new ApiKey('YOUR-WEAVIATE-API-KEY'),
  });
