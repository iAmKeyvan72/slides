---
theme: default
title: "From Manual to Velocity: The Spec-Driven Way"
info: |
  How we transformed weeks of manual work into seconds with Orval
  A journey through BFF creation and frontend automation
highlighter: shiki
lineNumbers: true
fonts:
  sans: 'Work Sans'
  mono: 'JetBrains Mono'
layout: cover
class: text-gray-900 dark:text-white
---

<style src="../../theme/style.css"></style>

# From Manual to Velocity
## The Spec-Driven Way

<div class="pt-12">
  <span class="py-2 px-4 rounded bg-amber-500 dark:bg-amber-400 text-black font-bold text-lg">
    How we turned weeks into seconds with Orval
  </span>
</div>

<div class="pt-16">
  <div class="text-xl text-gray-600 dark:text-slate-300">
    Presented by
  </div>
  <div class="text-3xl font-bold gradient-text pt-2">
    Keyvan Mahmoudi
  </div>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://orval.dev" target="_blank" alt="Orval" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-gray-900 dark:!hover:text-white">
    🚀
  </a>
</div>

<!--
🎯 Opening hook: Start with the transformation promise
💡 Set expectation: This is about dramatic productivity improvement
📝 Speaker notes: 
- Welcome everyone to this story of transformation
- We went from weeks of manual work to seconds of automation
- By the end, you'll know how to never write DTOs manually again
-->

---
layout: center
class: text-center
---

# The Challenge 💪

<div class="grid grid-cols-3 gap-12 pt-8">
<div v-click="1" class="bg-blue-100/70 dark:bg-blue-900/30 p-8 rounded-lg">

<div class="text-4xl mb-4 text-blue-600 dark:text-blue-300">🏗️</div>
<div class="text-blue-700 dark:text-blue-400 font-bold text-xl mb-4">Mission</div>
<div class="text-blue-800 dark:text-blue-100">Build a <strong>NestJS BFF</strong> to act as our API gateway</div>

</div>
<div v-click="2" class="bg-green-100/70 dark:bg-green-900/30 p-8 rounded-lg">

<div class="text-4xl mb-4 text-green-600 dark:text-green-300">🔌</div>
<div class="text-green-700 dark:text-green-400 font-bold text-xl mb-4">Integration</div>
<div class="text-green-800 dark:text-green-100">Connect <strong>4 different APIs</strong> through WSO2 portal</div>

</div>
<div v-click="3" class="bg-amber-100/70 dark:bg-amber-900/30 p-8 rounded-lg">

<div class="text-4xl mb-4 text-amber-600 dark:text-amber-300">⚡</div>
<div class="text-amber-700 dark:text-amber-400 font-bold text-xl mb-4">Reality</div>
<div class="text-amber-800 dark:text-amber-100">All API calls need <strong>authentication</strong> and <strong>validation</strong></div>

</div>
</div>



<!--
🎯 Context setting: Make the scope clear
💡 This isn't a toy project - real complexity
📝 Speaker notes:
- We needed to build a Backend for Frontend (BFF)
- This acts as our API gateway, centralizing all external calls
- 4 different APIs: 2 external through WSO2, 2 internal
- Every call needs proper authentication and request validation
-->

---
layout: center
---

<div class="w-full px-12">

# What We Needed to Build

<div class="grid grid-cols-2 gap-24 pt-8 text-left">

<div>

## Services ✅
<div class="text-green-700 dark:text-green-600 font-medium mb-4">Seemed straightforward...</div>

- HTTP clients for each API
- Authentication token management  
- Error handling & retries
- Request/response mapping

<div class="mt-6 p-4 bg-green-100/60 dark:bg-green-900/20 rounded-lg">
<div class="text-green-700 dark:text-green-400 font-bold text-sm">💭 Initial Thought</div>
<div class="text-xs text-gray-600 dark:text-slate-300">Just HTTP calls with auth tokens, right?</div>
</div>

</div>

<div>

## DTOs 😰
<div class="text-red-700 dark:text-red-500 font-bold mb-4">The real nightmare!</div>

- Request body validation schemas
- Query parameter validators
- Path parameter types
- Response type definitions
- Swagger documentation
- **Manual maintenance forever...**

<div class="mt-6 p-4 bg-red-100/60 dark:bg-red-900/20 rounded-lg">
<div class="text-red-700 dark:text-red-400 font-bold text-sm">😱 Reality Check</div>
<div class="text-xs text-gray-600 dark:text-slate-300">Weeks of manual typing for every endpoint!</div>
</div>

</div>

</div>

</div>

<!--
🎯 Problem identification: Show the hidden complexity
💡 Services look easy, DTOs are the time sink
📝 Speaker notes:
- Services seemed like the easy part - just HTTP calls with auth
- But DTOs are where the real work was hiding
- Think about it: every endpoint needs validation, types, docs
- Multiply by 4 APIs with dozens of endpoints each
- We're talking WEEKS of manual work, and it never ends!
-->

---
layout: statement
---

# From Manual Hell... 😵‍💫

<div class="text-center pt-8">
<div class="text-6xl">⬇️</div>
<div class="pt-8 text-4xl">

...to **Generated Everything** ✨

</div>
</div>

<style>
h1 {
  @apply text-red-700 dark:text-red-400;
}
</style>

<!--
🎯 Transformation moment: Build excitement for the solution
💡 There has to be a better way - and there is!
📝 Speaker notes:
- This is the moment we realized there had to be a better way
- What if we never had to write DTOs by hand again?
- What if our types were ALWAYS in sync with the API?
- What if API changes updated everything automatically?
-->

---
layout: center
---

<div class="w-full px-12">

# Enter Orval 🪄

<div class="grid grid-cols-2 gap-16 pt-8">
<div>

## Input
```yaml
# Just your OpenAPI spec
openapi: 3.0.0
info:
  title: User API
paths:
  /users/{id}:
    get:
      parameters:
        - name: id
          in: path
          schema:
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
```

</div>
<div>

## Output
- **TypeScript types** - Full type safety
- **Zod schemas** - Runtime validation  
- **API clients** - Ready-to-use functions
- **React Query hooks** - Easy data fetching
- **Mock handlers** - Testing with real data

<div class="pt-6 text-amber-500 font-bold">
One config file → Everything you need! 
</div>

</div>
</div>

</div>

<!--
🎯 The magic reveal: Show what Orval does
💡 One input, complete API development workflow
📝 Speaker notes:
- When I first saw Orval's documentation, I couldn't believe it
- You point it at your OpenAPI spec, write ONE config file
- Out comes everything you need for complete API integration
- Not just types - runtime validation with Zod
- Not just clients - React Query hooks with loading states
- Not just mocks - realistic data based on your examples
-->

---
layout: center
class: text-center
---

# Plot Twist: Spec Quality Matters! ⚠️

<div class="pt-4">
<div class="text-red-700 dark:text-red-400 text-2xl mb-4">
Orval needs <strong>minimum standard</strong> OpenAPI specs
</div>

<div class="grid grid-cols-2 gap-4 pt-4">
<div class="bg-red-100/70 dark:bg-red-900/30 p-8 rounded-lg">

<div class="text-4xl mb-4 text-red-600 dark:text-red-300">💔</div>
<div class="text-red-700 dark:text-red-400 font-bold text-xl mb-4">The Problem</div>
<div class="text-red-800 dark:text-red-100 text-left">
- Missing property descriptions<br>
- Incomplete schema definitions<br>
- No example values<br>
- Inconsistent data types
</div>

</div>
<div class="bg-amber-100/70 dark:bg-amber-900/30 p-8 rounded-lg">

<div class="text-4xl mb-4 text-amber-600 dark:text-amber-300">💥</div>
<div class="text-amber-700 dark:text-amber-400 font-bold text-xl mb-4">The Impact</div>
<div class="text-amber-800 dark:text-amber-100 text-left">
- Zod schema generation fails<br>
- Type definitions incomplete<br>
- Runtime validation broken<br>
- <strong>2 of our specs</strong> needed fixing
</div>

</div>
</div>
</div>

<div class="py-8 bg-blue-100/60 dark:bg-blue-900/20 p-4 rounded-lg max-w-4xl mx-auto mt-4">
<div class="text-blue-700 dark:text-blue-400 font-bold">💡 Lesson Learned:</div> 
<div class="text-gray-600 dark:text-slate-300">Backend teams need to maintain <strong>quality OpenAPI documentation</strong> for automation to work</div>
</div>

<!--
🎯 Reality check: Show spec quality requirements
💡 Automation depends on input quality
📝 Speaker notes:
- Just when we thought Orval would solve everything, we hit reality
- Orval needs well-structured OpenAPI specs to work properly
- If your backend team's swagger is incomplete, you're in trouble
- We discovered this with 2 out of our 4 API specs
- Missing descriptions, incomplete schemas, no examples = broken generation
- Had to work with backend teams to improve their spec quality
- This is actually a good thing - forces better API documentation standards
-->

---
layout: center
---

<div class="w-full px-12">

# Our Orval Configuration

<div class="grid grid-cols-2 gap-8 pt-2 text-left text-sm max-h-[45vh]">

<div>

```ts {all|4-6,9-11|all}
// orval.config.ts
export default defineConfig({
  internal: {
    input: './specs/user-service.yaml',
    output: {
      target: './src/generated/internal.ts',
      client: 'axios',
      mock: true,
      override: {
        zod: { enabled: true },
        mutator: {
          path: './src/mutators/internal.ts',
          name: 'internalMutator',
        },
      },
    },
  },
  external: {
    input: './specs/payment.yaml',
    output: {
      target: './src/generated/external.ts',
      client: 'axios',
      mock: true,
      override: {
        zod: { enabled: true },
        mutator: {
          path: './src/mutators/external.ts',
          name: 'externalMutator',
        },
      },
    },
  },
})
```

</div>

<div class="space-y-4">

<div>
<h3 class="text-lg font-bold text-blue-700 dark:text-blue-300 mb-3">📂 Multiple Inputs</h3>
<ul class="text-sm space-y-2">
<li>YAML and JSON specs</li>
<li>Separate configs per domain</li>
</ul>
</div>

<div>
<h3 class="text-lg font-bold text-green-700 dark:text-green-300 mb-3">⚙️ Rich Output</h3>
<ul class="text-sm space-y-2">
<li>Zod schemas with validation</li>
<li>Mock generation for testing</li>
<li>Custom mutators for auth</li>
</ul>
</div>

<div>
<h3 class="text-lg font-bold text-amber-700 dark:text-amber-300 mb-3">🎯 Result</h3>
<div class="text-sm text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-slate-800 p-3 rounded">
src/generated/<br>
├── internal.ts<br>
└── external.ts
</div>
</div>

</div>

</div>

</div>

<!--
🎯 Configuration deep dive: Show real, practical setup
💡 Simple config, but powerful and flexible
📝 Speaker notes:
- Here's our actual configuration
- Notice separate configs for internal vs external APIs
- Each has its own mutator for different auth requirements  
- We generate Zod schemas, mocks, and custom auth logic
- The result: two generated files with everything we need
- 💡 PRO TIP to mention: This 30-minute config saved us weeks of work!
-->

---
layout: center
---

# Plot Twist: WSO2 Authentication 🔐

<div class="text-center pt-8">
<div class="text-red-700 dark:text-red-400 text-2xl mb-6">
Every API call needs authentication tokens
</div>

<div class="text-4xl mb-8">🤔</div>

<div class="text-xl text-gray-600 dark:text-slate-300">
How do we inject custom auth logic into generated code?
</div>
</div>

<div class="pt-12 bg-amber-100/60 dark:bg-amber-900/20 p-6 rounded-lg">
<div class="text-amber-700 dark:text-amber-400 font-bold">Challenge:</div> 
Generated clients can't know about our specific WSO2 requirements
</div>

<!--
🎯 The big challenge: Authentication complexity  
💡 Generated code is great, but we need custom logic
📝 Speaker notes:
- Just when we thought we had it figured out, reality hit
- WSO2 portal requires auth tokens on every single request
- But generated clients don't know our specific auth logic
- We needed to "mutate" requests before they're sent
- This is where most people give up and go back to manual
-->

---
layout: center
---

<div class="w-full px-12">

# Mutators to the Rescue! 🦸‍♂️

<div class="grid grid-cols-2 gap-8 pt-2 text-left text-sm">

<div>

```ts {all|5-9|all}
// src/mutators/internal.ts
export const internalMutator = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  // Get internal service token
  const token = await getInternalToken()
  
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  }
}
```

<div class="pt-4 text-center">
<div class="text-green-700 dark:text-green-400 font-bold">🏠 Internal APIs</div>
<div class="text-xs text-gray-600 dark:text-slate-300">Auto-injects internal service credentials</div>
</div>

</div>

<div>

```ts {all|5-9|all}
// src/mutators/external.ts  
export const externalMutator = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  // Get external partner token
  const token = await getExternalToken()
  
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
      'X-Partner-ID': process.env.PARTNER_ID,
    },
    timeout: 15000,
  }
}
```

<div class="pt-4 text-center">
<div class="text-blue-700 dark:text-blue-400 font-bold">🌐 External APIs</div>
<div class="text-xs text-gray-600 dark:text-slate-300">Auto-injects external partner credentials</div>
</div>

</div>

</div>

<div class="pt-4 text-center">
<div class="bg-green-100/60 dark:bg-green-900/20 p-4 rounded-lg max-w-4xl mx-auto">
<div class="text-green-700 dark:text-green-400 font-bold">💡 The Magic:</div>
<div class="text-gray-600 dark:text-slate-300 text-sm">These functions run before EVERY API call automatically</div>
</div>
</div>

</div>

<!--
🎯 The solution: Mutators solve auth complexity
💡 Simple functions that solve complex problems
📝 Speaker notes:
- Mutators are functions that modify HTTP requests before sending
- We created two - one for internal APIs, one for external
- Each handles its own authentication and headers
- They run automatically before every single API call
- Different timeouts, different auth, completely customizable
- This is what makes Orval powerful: generated code + custom logic
-->

---
layout: center
---

<div class="w-full px-12">

# NestJS Integration Made Simple ✅

<div class="grid grid-cols-2 gap-12 pt-8">
<div>

```ts {all|3,8-10|all}
// src/services/user.service.ts
import { Injectable } from '@nestjs/common'
import { getUser, createUser } from '../generated/internal'

@Injectable()
export class UserService {
  
  async findUser(userId: string) {
    // Generated function with auth + types + validation!
    return await getUser({ userId })
  }
  
  async createUser(userData: CreateUserRequest) {
    // Type-safe, auto-validated request
    return await createUser(userData)
  }
}
```

</div>
<div>

## ✨ What We Got

<div class="text-lg space-y-3 leading-relaxed pt-4 pb-4">

<div><strong>🔐 Auto-authenticated</strong> requests</div>
<div><strong>🔒 Type-safe</strong> function calls</div>
<div><strong>✅ Runtime validation</strong> with Zod</div>
<div><strong>🛡️ Error handling</strong> built-in</div>
<div><strong>🧪 Mock-ready</strong> for testing</div>

</div>

<div class="pt-6 bg-blue-100/60 dark:bg-blue-900/20 p-4 rounded-lg">
<div class="text-blue-700 dark:text-blue-400 font-bold">⚡ Before vs After</div>
<div class="text-sm text-gray-600 dark:text-slate-300">
<div class="text-red-700 dark:text-red-400">Before:</div> HTTP client + auth + types + validation
<div class="text-green-700 dark:text-green-400">After:</div> Import function, call it!
</div>
</div>

</div>
</div>

</div>

<!--
🎯 Services integration: Show NestJS simplicity
💡 Generated code drops right into NestJS architecture  
📝 Speaker notes:
- This is where it all comes together in our NestJS app
- Instead of writing HTTP clients and auth logic...
- We just import generated functions and use them!
- Each function already has auth (via mutators), types, validation
- Error handling built right in
- When API spec changes? Regenerate and stay in sync
-->

---
layout: center
---

<div class="w-full px-12">

# DTOs Without the Pain 😌

<div class="grid grid-cols-2 gap-8 pt-2 text-left text-lg">

<div>

## The Magic Pipeline

<div class="space-y-3 text-base mt-6">
<div v-click="1">
<div class="flex items-center gap-3">
<span class="text-blue-700 dark:text-blue-400 font-bold">1.</span>
<span>OpenAPI spec → Orval → Zod schemas</span>
</div>
<div class="text-xl">⬇️</div>
</div>

<div v-click="2">
<div class="flex items-center gap-3">
<span class="text-green-700 dark:text-green-400 font-bold">2.</span> 
<span>Zod schemas → nestjs-zod → DTOs</span>
</div>
<div class="text-xl">⬇️</div>
</div>

<div v-click="3">
<div class="flex items-center gap-3">
<span class="text-amber-700 dark:text-amber-400 font-bold">3.</span>
<span>DTOs → NestJS → Swagger docs</span>
</div>
</div>
</div>

<div v-click="4" class="mt-6 bg-amber-100/60 dark:bg-amber-900/20 p-4 rounded-lg">
<div class="text-amber-700 dark:text-amber-400 font-bold text-base">🎯 End Result:</div>
<div class="text-sm">WSO2-ready Swagger documentation!</div>
</div>

</div>

<div>

```ts {all|2,5-6|9-12|all}
// Auto-generated DTO
import { createZodDto } from 'nestjs-zod'
import { CreateUserSchema } from '../generated/internal'

export class CreateUserDto extends createZodDto(
  CreateUserSchema
) {}

// Usage in controller
@Post() 
async createUser(@Body() dto: CreateUserDto) {
  // dto is already validated!
  return this.userService.createUser(dto)
}
```

<div class="pt-4 space-y-2 text-sm">
<div class="bg-green-100/60 dark:bg-green-900/20 p-2 rounded">
✅ <strong>Request validation</strong> - automatic
</div>
<div class="bg-blue-100/60 dark:bg-blue-900/20 p-2 rounded">  
✅ <strong>Swagger docs</strong> - generated
</div>
<div class="bg-purple-100/60 dark:bg-purple-900/20 p-2 rounded">
✅ <strong>Type safety</strong> - guaranteed  
</div>
</div>

</div>

</div>

</div>

<!--
🎯 DTO automation: Show complete pipeline
💡 From API spec to NestJS DTOs automatically
📝 Speaker notes:
- This is where the magic happens for NestJS controllers
- We take Zod schemas that Orval generated from OpenAPI specs
- nestjs-zod transforms them into proper NestJS DTOs  
- These DTOs automatically validate requests
- AND generate Swagger docs we need for WSO2
- From one spec: validation, types, docs - all in sync!
-->

---
layout: center
---

<div class="w-full px-12">

# Testing at Lightning Speed ⚡

<div class="grid grid-cols-2 gap-12 pt-8">
<div>

```ts {all|3,7-9|all}
// Auto-generated by Orval  
import { rest } from 'msw'
import { getUserMockHandler } from '../generated/internal'

// Mock server setup
const server = setupServer(
  getUserMockHandler,
  createUserMockHandler,
  // ... all handlers auto-generated!
)

// Test with realistic data
it('should fetch user data', async () => {
  // Mock returns realistic data automatically!
  const result = await userService.findUser('123')
  
  expect(result).toHaveProperty('id')
  expect(result).toHaveProperty('email')
})
```

</div>
<div>

## 🚀 Speed Benefits

<div class="text-lg space-y-2 leading-relaxed pt-2 pb-2">

<div><strong>⚡ No mock setup</strong> - generated automatically</div>
<div><strong>🎭 Realistic data</strong> - based on spec examples</div>
<div><strong>🔒 Type-safe mocks</strong> - same as real responses</div>
<div><strong>🔄 Always in sync</strong> - regenerate with spec changes</div>

</div>

<div class="pt-3 bg-gray-100/80 dark:bg-slate-800/50 p-4 rounded-lg">
<div class="text-green-700 dark:text-green-400 font-bold">Before vs After</div>
<div class="text-sm">
<div class="text-red-700 dark:text-red-400">Before:</div> Write mocks, maintain test data  
<div class="text-green-700 dark:text-green-400">After:</div> Import handlers, write tests
</div>
</div>

</div>
</div>

</div>

<!--
🎯 Testing power: Show how mocks accelerate development
💡 Generated mocks eliminate testing bottlenecks
📝 Speaker notes:
- Our testing workflow got completely transformed
- Orval generates MSW handlers for every endpoint
- These return realistic data from your OpenAPI examples
- No more writing mock data or maintaining fixtures
- When API changes, mocks automatically update too
- Comprehensive tests without external dependencies
-->

---
layout: statement
---

# The Impact 💥

<div class="text-center pt-8">
<div class="grid grid-cols-2 gap-16 text-4xl font-bold">
<div v-click="1">
<div class="text-6xl mb-4">📅</div>
<div class="text-red-700 dark:text-red-400">DAYS</div>
<div class="text-sm font-normal">of manual work</div>
</div>

<div v-click="2">
<div class="text-6xl mb-4">⚡</div> 
<div class="text-green-700 dark:text-green-400">SECONDS</div>
<div class="text-sm font-normal">of generation</div>
</div>
</div>

<div class="pt-12 grid grid-cols-3 gap-8">
<div v-click="3" class="bg-green-100/60 dark:bg-green-900/20 p-4 rounded-lg">
<div class="text-2xl mb-2">🐛</div>
<div class="font-bold text-green-700 dark:text-green-400">Fewer Bugs</div>
<div class="text-sm">Generated = consistent</div>
</div>

<div v-click="4" class="bg-blue-100/60 dark:bg-blue-900/20 p-4 rounded-lg">
<div class="text-2xl mb-2">🔒</div> 
<div class="font-bold text-blue-700 dark:text-blue-400">Type Safety</div>
<div class="text-sm">Always in sync</div>
</div>

<div v-click="5" class="bg-purple-100/60 dark:bg-purple-900/20 p-4 rounded-lg">
<div class="text-2xl mb-2">📋</div>
<div class="font-bold text-purple-700 dark:text-purple-400">Single Truth</div> 
<div class="text-sm">The spec rules all</div>
</div>
</div>
</div>

<!--
🎯 Big impact reveal: Show dramatic transformation
💡 This transforms development, not just saves time
📝 Speaker notes:
- Let's talk about the real impact
- We went from DAYS of manual work to SECONDS of generation
- But benefits go beyond time savings:
- Generated code = consistent code, fewer bugs
- Everything type-safe from same source
- Spec becomes single source of truth
- When API changes, everything updates together
-->

---
layout: center
---

# Frontend: The Journey Continues 🧭

<div class="grid grid-cols-3 gap-8 pt-8">
<div class="text-center">
<div class="text-4xl mb-4">🏗️</div>
<div class="bg-blue-100/80 dark:bg-blue-900/30 p-4 rounded-lg">
<div class="text-blue-700 dark:text-blue-400 font-bold mb-2">BFF Built</div>
<div class="text-sm">
✅ Services generated  
✅ DTOs created  
✅ Swagger exported
</div>
</div>
</div>

<div class="text-center">
<div class="text-4xl mb-4">🔄</div>
<div class="bg-green-100/80 dark:bg-green-900/30 p-4 rounded-lg">
<div class="text-green-700 dark:text-green-400 font-bold mb-2">Round Two</div>
<div class="text-sm">
📄 BFF Swagger spec  
→ Frontend Orval config  
→ Generate everything!
</div>
</div>
</div>

<div class="text-center">
<div class="text-4xl mb-4">⚛️</div>
<div class="bg-purple-100/80 dark:bg-purple-900/30 p-4 rounded-lg">
<div class="text-purple-700 dark:text-purple-400 font-bold mb-2">Frontend Magic</div>
<div class="text-sm">
🪝 React Query hooks  
🔒 TypeScript types  
🧪 Zod schemas + mocks
</div>
</div>
</div>
</div>

<div class="pt-8 text-center">
<div class="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-800 dark:to-slate-700 p-4 rounded-lg">
<div class="text-amber-700 dark:text-amber-400 font-bold">🎯 Complete Loop</div>
<div class="text-sm">External APIs → BFF → Frontend → React App</div>
</div>
</div>

<!--
🎯 Frontend transition: Extend the pattern 
💡 BFF becomes API source for frontend
📝 Speaker notes:
- Our BFF generates its own Swagger documentation
- Why not use the same approach for our frontend?
- Take BFF's Swagger spec, use Orval again
- Generate React Query hooks, types, Zod schemas
- Complete end-to-end spec-driven development
- Changes ripple from external APIs through BFF to frontend
-->

---
layout: center
---

<div class="w-full px-12">

# Frontend Usage in Action 🎯

<div class="grid grid-cols-2 gap-6 pt-1 text-left text-sm max-h-[85vh]">

<div>

```tsx {all|2,5-6|15-17|all}
// components/UserProfile.tsx
import { useGetUserQuery, useUpdateUserMutation } from '../api'

function UserProfile({ userId }) {
  const { data: user, isLoading, error } = useGetUserQuery({ userId })
  const updateMutation = useUpdateUserMutation()
  
  if (isLoading) return <Spinner />
  if (error) return <ErrorAlert error={error} />
  
  return (
    <div>
      <h1>{user.name}</h1>
      <button 
        onClick={() => updateMutation.mutate({
          userId, 
          data: { name: 'New Name' }
        })}
      >
        Update User
      </button>
    </div>
  )
}
```

</div>

<div>

## Form Validation

```tsx {all|2,5-7|all}
// forms/CreateUserForm.tsx  
import { CreateUserSchema } from '../api'
import { useForm } from 'react-hook-form'

const form = useForm({
  resolver: zodResolver(CreateUserSchema)
})

const onSubmit = form.handleSubmit((data) => {
  // data is fully typed and validated
  createUserMutation.mutate(data)
})
```

## What We Get

<div class="grid grid-cols-1 gap-1 text-xs mt-3">
<div class="bg-blue-100/60 dark:bg-blue-900/20 p-1.5 rounded">⚡ <strong>Automatic loading states</strong></div>
<div class="bg-green-100/60 dark:bg-green-900/20 p-1.5 rounded">🛡️ <strong>Error handling</strong></div>
<div class="bg-purple-100/60 dark:bg-purple-900/20 p-1.5 rounded">🔒 <strong>Type-safe forms</strong></div>
<div class="bg-orange-900/20 p-1.5 rounded">🧪 <strong>Realistic test mocks</strong></div>
<div class="bg-red-100/60 dark:bg-red-900/20 p-1.5 rounded">🚫 <strong>Zero manual API code</strong></div>
</div>

</div>

</div>

</div>

<!--
🎯 Frontend reality: Show actual React usage
💡 This is how easy React development becomes
📝 Speaker notes:
- Here's what using generated code looks like in React
- Instead of useEffect and fetch, we import React Query hooks
- Loading, error, data all handled automatically
- For forms, we use generated Zod schemas
- TypeScript knows all field types, validates at compile time
- For testing, generated MSW handlers with realistic data
- We went from tons of boilerplate to just importing and using
-->

---
layout: center
---

<div class="pt-8 px-12 w-full max-w-6xl mx-auto">

# The Spec-Driven Development Loop ♻️

<div class="flex items-center justify-between mb-8 gap-2 mt-8">

<div v-click="1" class="bg-blue-100/80 dark:bg-blue-900/30 py-4 px-6 rounded-lg text-center flex-1">
<div class="text-3xl mb-2">📝</div>
<div class="text-blue-700 dark:text-blue-400 font-bold text-lg">Spec Changes</div>
<div class="text-sm text-gray-600 dark:text-slate-300 mt-2">Updates OpenAPI</div>
</div>

<div v-click="2" class="text-3xl text-cyan-700 dark:text-cyan-400 px-4">→</div>

<div v-click="3" class="bg-green-100/80 dark:bg-green-900/30 py-4 px-6 rounded-lg text-center flex-1">
<div class="text-3xl mb-2">🏗️</div>
<div class="text-green-700 dark:text-green-400 font-bold text-lg">BFF Regenerates</div>
<div class="text-sm text-gray-600 dark:text-slate-300 mt-2">Services, DTOs update</div>
</div>

<div v-click="4" class="text-3xl text-cyan-700 dark:text-cyan-400 px-4">→</div>

<div v-click="5" class="bg-purple-100/80 dark:bg-purple-900/30 py-4 px-6 rounded-lg text-center flex-1">
<div class="text-3xl mb-2">⚛️</div>
<div class="text-purple-700 dark:text-purple-400 font-bold text-lg">Frontend Syncs</div>
<div class="text-sm text-gray-600 dark:text-slate-300 mt-2">React hooks update</div>
</div>

</div>

<div v-click="6" class="bg-amber-100/80 dark:bg-amber-900/30 py-4 px-8 rounded-lg w-full text-center">
<div class="text-amber-700 dark:text-amber-400 font-bold text-xl mb-4">⚡ The Magic Result</div>
<div class="grid grid-cols-3 gap-6 text-base">
<div v-click="7"><strong>✅ No Drift</strong> - Types always match reality</div>
<div v-click="8"><strong>✅ No Bugs</strong> - Breaking changes caught at compile time</div>
<div v-click="9"><strong>✅ No Manual Work</strong> - Everything updates automatically</div>
</div>
</div>

</div>

<!--
🎯 The core principle: Show complete workflow
💡 Self-maintaining development ecosystem
📝 Speaker notes:
- This is the core principle that makes everything beautiful
- Backend team updates OpenAPI spec, everything flows automatically
- BFF regenerates services, DTOs, types - no manual work
- BFF's updated Swagger triggers frontend regeneration
- React hooks, schemas, tests all update to match new API
- This eliminates the biggest problem: drift between systems
- No more "frontend using old types" or "docs are outdated"
- Everything stays in sync from same source of truth
-->

---
layout: center
---

# Key Takeaways 🚀

<div class="grid grid-cols-1 gap-4 pt-4 max-w-4xl mx-auto">

<div class="bg-amber-100/80 dark:bg-amber-900/30 p-4 rounded-lg">
<div class="text-amber-700 dark:text-amber-400 font-bold text-xl mb-2">🔄 Orval transforms spec-driven development</div>
<div class="text-base text-gray-600 dark:text-slate-300">From OpenAPI specs to complete type-safe clients, automatically</div>
</div>

<div class="bg-green-100/80 dark:bg-green-900/30 p-4 rounded-lg">
<div class="text-green-700 dark:text-green-400 font-bold text-xl mb-2">🔑 Mutators solve complex auth requirements</div>
<div class="text-base text-gray-600 dark:text-slate-300">Handle any authentication flow with custom request modifiers</div>
</div>

<div class="bg-blue-100/80 dark:bg-blue-900/30 p-4 rounded-lg">
<div class="text-blue-700 dark:text-blue-400 font-bold text-xl mb-2">⚡ Generated mocks accelerate testing</div>
<div class="text-base text-gray-600 dark:text-slate-300">Realistic test data from your actual API specifications</div>
</div>

<div class="bg-purple-100/80 dark:bg-purple-900/30 p-4 rounded-lg">
<div class="text-purple-700 dark:text-purple-400 font-bold text-xl mb-2">🌊 End-to-end automation from API to UI</div>
<div class="text-base text-gray-600 dark:text-slate-300">Complete workflow automation eliminates drift and manual work</div>
</div>

</div>

<!--
🎯 Concrete takeaways for immediate action
💡 Each takeaway is actionable and specific
📝 Speaker notes:
- These are the 4 core transformations you can achieve
- Start with Orval for basic client generation
- Add mutators when you hit auth complexity 
- Leverage the generated mocks for faster testing cycles
- Build the complete automation loop for maximum impact
- Each step builds on the previous one
-->

---
layout: center
---

<div class="w-full px-12">

# Essential Resources 📚

<div class="pt-6">
<div class="grid grid-cols-2 gap-12">

<div class="bg-blue-100/80 dark:bg-blue-900/30 p-8 rounded-lg">
<div class="text-blue-700 dark:text-blue-400 font-bold text-2xl mb-6">🔗 Core Tools</div>
<div class="text-left space-y-4 text-lg">
<div>
<div class="font-bold text-blue-700 dark:text-blue-300">Orval</div>
<div><a href="https://orval.dev" target="_blank" class="text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 underline">orval.dev</a></div>
</div>
<div>
<div class="font-bold text-blue-700 dark:text-blue-300">nestjs-zod</div>
<div><a href="https://npmjs.com/package/nestjs-zod" target="_blank" class="text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 underline">npmjs.com/package/nestjs-zod</a></div>
</div>
<div>
<div class="font-bold text-blue-700 dark:text-blue-300">React Query</div>
<div><a href="https://tanstack.com/query" target="_blank" class="text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 underline">tanstack.com/query</a></div>
</div>
<div>
<div class="font-bold text-blue-700 dark:text-blue-300">MSW</div>
<div><a href="https://mswjs.io" target="_blank" class="text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 underline">mswjs.io</a></div>
</div>
</div>
</div>

<div class="bg-gray-100/80 dark:bg-slate-800/50 p-8 rounded-lg">
<div class="text-amber-700 dark:text-amber-400 font-bold text-2xl mb-6">📖 Documentation</div>
<div class="text-left space-y-4 text-lg text-gray-600 dark:text-slate-300">
<div>✅ Comprehensive guides</div>
<div>✅ Real-world examples</div>
<div>✅ Active communities</div>
<div>✅ Production-ready</div>
</div>
</div>

</div>
</div>

</div>

<!--
🎯 Clean resource overview
💡 All tools are production-ready with great docs
📝 Speaker notes:
- These are all the tools we used in our implementation
- Each has excellent documentation and examples
- Orval is the star - handles the heavy lifting of client generation
- nestjs-zod bridges Zod schemas to NestJS DTOs perfectly
- React Query provides the data fetching layer on frontend
- MSW gives you realistic testing with generated mocks
- All have active communities and regular updates
-->

---
layout: center
class: text-center
---

# Your Next Steps 💡

<div class="pt-2">
<div class="grid grid-cols-1 gap-3 max-w-3xl mx-auto">

<div class="bg-green-100/80 dark:bg-green-900/30 p-4 rounded-lg">
<div class="text-green-700 dark:text-green-400 font-bold text-xl mb-2">1️⃣ Start Small</div>
<div class="text-base text-gray-600 dark:text-slate-300">Pick one API, create your first Orval config, generate a client</div>
</div>

<div class="bg-blue-100/80 dark:bg-blue-900/30 p-4 rounded-lg">
<div class="text-blue-700 dark:text-blue-400 font-bold text-xl mb-2">2️⃣ Add Authentication</div>
<div class="text-base text-gray-600 dark:text-slate-300">Create mutators for your auth requirements, test with real tokens</div>
</div>

<div class="bg-purple-100/80 dark:bg-purple-900/30 p-4 rounded-lg">
<div class="text-purple-700 dark:text-purple-400 font-bold text-xl mb-2">3️⃣ Build the Loop</div>
<div class="text-base text-gray-600 dark:text-slate-300">Extend to DTOs, then frontend, establish the automation workflow</div>
</div>

<div class="bg-amber-100/80 dark:bg-amber-900/30 p-4 rounded-lg">
<div class="text-amber-700 dark:text-amber-400 font-bold text-xl mb-2">4️⃣ Scale & Optimize</div>
<div class="text-base text-gray-600 dark:text-slate-300">Add more APIs, refine your process, enjoy the velocity! 🚀</div>
</div>

</div>
</div>

<!--
🎯 Clear, actionable progression
💡 Build momentum with early wins
📝 Speaker notes:
- Don't try to do everything at once - build momentum
- Start with your simplest API to prove the concept
- Once you see the first generated client, you'll be hooked
- Authentication is usually the first real challenge - mutators solve it
- The full loop is where the magic happens - everything connected
- Scale gradually - each new API gets easier
- The compound benefits are incredible once you're running
-->

---
layout: statement
---

# Thank You! 🎉

<div class="text-center pt-16">
<div class="text-3xl text-gray-600 dark:text-slate-300 mb-12">
Ready to transform your workflow?
</div>

<div class="text-2xl text-gray-600 dark:text-slate-400 mb-16">
Start with <strong>one API</strong> and experience the magic ✨
</div>

<div class="text-4xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
Questions? 🚀
</div>
</div>

<!--
🎯 Clean, impactful closing focused on action
💡 Encourages immediate next steps and opens discussion
📝 Speaker notes:
- Simple, direct closing without repeating presentation title
- "Ready to transform" - action-oriented question
- "Start with one API" - concrete, achievable first step
- "Experience the magic" - emotional hook, references the transformation
- The tools are ready, the process is proven, now it's time to act
- Open floor for questions about implementation, challenges, or getting started
- Offer to help with specific use cases or technical details
-->
