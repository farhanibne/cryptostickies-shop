import  sanityClient  from "@sanity/client";

export const client = sanityClient({
    projectId: 'lmnij96g',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:
      'sk04CXyuNuroywwmpztnzFaqKR2830uj5QYMXcbZhNnNZmUnidND74pejmA3sTe9e92szP3du9E4KwsLqJumjCayEC0pvxtFdEUY3EaGOOpJxY2puWqGWTeMVMZr9nchjg7vhgRS3JknkzDfsNYfNXq84FKG18B8o8sUYvpbCqOnn4u91NyW',
    useCdn: false,
  })