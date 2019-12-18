# To Reproduce

1. `yarn`
2. `yarn prisma2 generate` (optional because facade)
3. `ts-node index.ts`

Error:

```
divyendusingh [p2-e]$ ts-node index.ts
(node:4344) UnhandledPromiseRejectionWarning: Error:
Invalid `const data = await photon.users.findMany()` invocation in /Users/divyendusingh/Documents/prisma/p2-e/index.ts:6:35

  2
  3 const photon = new Photon()
  4
  5 async function main() {
→ 6   const data = await photon.users.findMany(

undefined target="exit" timestamp="2019-12-18T14:07:01.289Z" fields={"message":"1"}
    at PhotonFetcher.<anonymous> (/Users/divyendusingh/Documents/prisma/p2-e/node_modules/@prisma/photon/index.js:65:27)
    at Generator.throw (<anonymous>)
    at rejected (/Users/divyendusingh/Documents/prisma/p2-e/node_modules/@prisma/photon/index.js:6:65)
(node:4344) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:4344) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

The underlying error is that, `schema.prisma` uses an env var which is not fulfilled in Photon. Creating an `.env` (based on .env-sample) file and un-commenting line 3,4 from `index.ts` fixes this.
