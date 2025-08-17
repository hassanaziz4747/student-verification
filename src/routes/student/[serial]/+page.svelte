<!-- src/routes/student/[serial]/+page.svelte -->
<script>
  export let data;
  const { student } = data;

  import { onMount } from "svelte";

  let showAnimation = true;
  let animationStep = 0; // 0: drop, 1: checkmark, 2: text, 3: fade to main

  onMount(() => {
    // Animation sequence
    setTimeout(() => (animationStep = 1), 800); // Show checkmark after drop
    setTimeout(() => (animationStep = 2), 1500); // Show text
    setTimeout(() => (animationStep = 3), 3000); // Start fade
    setTimeout(() => (showAnimation = false), 3500); // Hide animation
  });
</script>

<svelte:head>
  <title>Certificate Verification - {student.studentName}</title>
  <meta
    name="description"
    content="Certificate verification for {student.studentName}"
  />
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

<!-- Loading Animation -->
{#if showAnimation}
  <div
    class="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 z-50 flex items-center justify-center"
    class:fade-out={animationStep === 3}
  >
    <!-- Animated Drop -->
    <div class="relative">
      <div class="drop" class:drop-animate={animationStep >= 0}></div>

      <!-- Checkmark that appears from the drop -->
      {#if animationStep >= 1}
        <div
          class="checkmark-container"
          class:checkmark-appear={animationStep >= 1}
        >
          <div
            class="bg-green-500 rounded-full w-24 h-24 flex items-center justify-center shadow-lg shadow-green-500/50 checkmark-bounce"
          >
            <svg
              class="w-12 h-12 text-white checkmark-draw"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>
      {/if}

      <!-- SIIT Text Animation -->
      {#if animationStep >= 2}
        <div class="mt-8 text-center">
          <div class="text-4xl text-white font-cursive writing-animation">
            Standard Institute of Information Technology
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}

<main
  class="min-h-screen flex items-center justify-center p-4"
  class:opacity-0={showAnimation}
>
  <!-- Background with elegant tech/education theme -->
  <div
    class="fixed inset-0 bg-cover bg-center bg-no-repeat"
    style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80');"
  ></div>

  <!-- Enhanced semi-transparent glass card with shine -->
  <div
    class="relative backdrop-blur-md bg-gradient-to-br from-white/30 via-white/25 to-white/20 border border-white/50 rounded-3xl shadow-2xl shadow-cyan-500/20 p-8 max-w-4xl w-full mx-4 shine-effect"
  >
    <!-- Verified mark in top left corner -->
    <div class="absolute top-4 left-4 w-16 h-16 opacity-90 z-10">
      <div
        class="w-full h-full bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 pulse-glow"
      >
        <svg
          class="w-10 h-10 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>

    <!-- SIIT Logo in top right corner -->
    <div class="absolute top-4 right-4 w-28 h-28 opacity-90 z-10">
      <img
        src="/logo_white.png"
        alt="SIIT Logo"
        class="w-full h-full object-contain drop-shadow-lg"
      />
    </div>

    <!-- Certificate content -->
    <div class="space-y-6 text-white mt-4">
      <div class="text-center mb-8">
        <h1
          class="text-3xl font-bold mb-2 text-white/95 drop-shadow-sm font-ubuntu"
        >
          Certificate Verification
        </h1>
        <div
          class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full shadow-sm shimmer"
        ></div>
      </div>

      <div class="grid gap-4 text-lg">
        <!-- Registration Number at top -->
        <div class="flex flex-col sm:flex-row">
          <span
            class="font-semibold text-cyan-200 min-w-[200px] mb-1 sm:mb-0 font-ubuntu"
            >Registration Number:</span
          >
          <span class="text-white/95 font-medium font-ubuntu"
            >{student.registrationNumber}</span
          >
        </div>

        <!-- Desktop: Side by side for Student Name and Father Name -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="flex flex-col">
            <span class="font-semibold text-cyan-200 mb-1 font-ubuntu"
              >Student Name:</span
            >
            <span class="text-white/95 font-medium text-xl font-ubuntu"
              >{student.studentName}</span
            >
          </div>

          <div class="flex flex-col">
            <span class="font-semibold text-cyan-200 mb-1 font-ubuntu"
              >Father/Guardian:</span
            >
            <span class="text-white/95 font-medium text-xl font-ubuntu"
              >{student.fatherName}</span
            >
          </div>
        </div>

        <div class="flex flex-col sm:flex-row">
          <span
            class="font-semibold text-cyan-200 min-w-[200px] mb-1 sm:mb-0 font-ubuntu"
            >Course:</span
          >
          <span class="text-white/95 font-medium font-ubuntu"
            >{student.course}</span
          >
        </div>

        <div class="flex flex-col">
          <span class="font-semibold text-cyan-200 mb-2 font-ubuntu"
            >Course Content:</span
          >
          <span
            class="text-black/95 text-base leading-relaxed bg-white/15 p-4 rounded-xl border border-white/30 backdrop-blur-sm font-ubuntu"
            >{student.courseContent}</span
          >
        </div>

        <div class="flex flex-col sm:flex-row">
          <span
            class="font-semibold text-cyan-200 min-w-[200px] mb-1 sm:mb-0 font-ubuntu"
            >Age:</span
          >
          <span class="text-white/95 font-medium font-ubuntu"
            >{student.age} years</span
          >
        </div>

        <div class="flex flex-col sm:flex-row">
          <span
            class="font-semibold text-cyan-200 min-w-[200px] mb-1 sm:mb-0 font-ubuntu"
            >Grade:</span
          >
          <span
            class="text-2xl font-bold text-green-300 drop-shadow-sm font-ubuntu"
            >{student.grade}</span
          >
        </div>
      </div>

      <!-- Verified By Section -->
      <div class="mt-8 pt-6">
        <h3
          class="text-center text-cyan-200 font-semibold mb-6 font-ubuntu text-lg"
        >
          Verified By
        </h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Program Coordinator -->
          <div class="text-center">
            <div class="text-white/90 font-medium font-serif text-lg mb-1">
              Program Coordinator
            </div>
            <div class="text-white/95 font-serif text-xl font-semibold">
              Muhammad Arsalan Ahmad
            </div>
          </div>

          <!-- Principal -->
          <div class="text-center">
            <div class="text-white/90 font-medium font-serif text-lg mb-1">
              Principal
            </div>
            <div class="text-white/95 font-serif text-xl font-semibold">
              Aashiq Hussain Bukhari
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-8 pt-6 border-t border-white/40">
        <p class="text-white/80 text-sm font-medium font-ubuntu">
          Standard Institute of Information Technology
        </p>
        <p class="text-white/70 text-xs mt-1 font-ubuntu">
          Certificate verified on {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital@0,1;wght@300;400;500;700&family=Dancing+Script:wght@400;500;600;700&family=Playfair+Display:ital@0,1;wght@400;500;600;700&display=swap");

  :global(body) {
    margin: 0;
    font-family:
      "Ubuntu",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      sans-serif;
    background: #0a0a0a;
  }

  :global(*) {
    box-sizing: border-box;
  }

  .font-ubuntu {
    font-family: "Ubuntu", sans-serif;
  }

  .font-serif {
    font-family: "Playfair Display", serif;
  }

  /* Shine effect for glass */
  .shine-effect {
    position: relative;
    overflow: hidden;
  }

  .shine-effect::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: shine 3s infinite;
    border-radius: 1.5rem;
  }

  @keyframes shine {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  /* Animation Styles */
  .fade-out {
    animation: fadeOut 0.5s ease-out forwards;
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }

  .drop {
    width: 20px;
    height: 20px;
    background: linear-gradient(to bottom, #10b981, #059669);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
  }

  .drop-animate {
    animation: dropFall 0.8s ease-in forwards;
  }

  @keyframes dropFall {
    0% {
      top: -100px;
      opacity: 1;
    }
    70% {
      top: 0px;
    }
    100% {
      top: 0px;
      opacity: 0;
    }
  }

  .checkmark-container {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
  }

  .checkmark-appear {
    animation: checkmarkAppear 0.5s ease-out forwards;
  }

  @keyframes checkmarkAppear {
    0% {
      opacity: 0;
      transform: translateX(-50%) scale(0.5);
    }
    100% {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
  }

  .checkmark-bounce {
    animation: bounce 0.6s ease-out;
  }

  @keyframes bounce {
    0%,
    20%,
    53%,
    80%,
    100% {
      transform: translateY(0);
    }
    40%,
    43% {
      transform: translateY(-10px);
    }
    70% {
      transform: translateY(-5px);
    }
    90% {
      transform: translateY(-2px);
    }
  }

  .checkmark-draw {
    stroke-dasharray: 20;
    stroke-dashoffset: 20;
    animation: drawCheck 0.5s ease-out 0.2s forwards;
  }

  @keyframes drawCheck {
    to {
      stroke-dashoffset: 0;
    }
  }

  .writing-animation {
    opacity: 0;
    animation: writeText 1s ease-out forwards;
  }

  @keyframes writeText {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Pulse glow for verified badge */
  .pulse-glow {
    animation: pulseGlow 2s ease-in-out infinite alternate;
  }

  @keyframes pulseGlow {
    from {
      box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
    }
    to {
      box-shadow: 0 0 30px rgba(34, 197, 94, 0.6);
    }
  }

  /* Shimmer effect for the line */
  .shimmer {
    background: linear-gradient(90deg, #06b6d4, #3b82f6, #06b6d4);
    background-size: 200% 100%;
    animation: shimmerEffect 2s ease-in-out infinite;
  }

  @keyframes shimmerEffect {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  /* Main content transition */
  main {
    transition: opacity 0.5s ease-in;
  }
</style>
