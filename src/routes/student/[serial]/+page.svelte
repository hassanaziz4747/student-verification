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
    class="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 z-50 flex flex-col items-center justify-center px-4"
    class:fade-out={animationStep === 3}
  >
    <!-- Animated Certificate Icon -->
    <div class="relative mb-8 flex flex-col items-center">
      <!-- Morphing Certificate Icon -->
      <div class="cert-morph" class:cert-animate={animationStep >= 0}>
        <div class="cert-particles">
          <div class="particle particle-1"></div>
          <div class="particle particle-2"></div>
          <div class="particle particle-3"></div>
          <div class="particle particle-4"></div>
        </div>

        {#if animationStep >= 1}
          <div
            class="cert-icon-container"
            class:cert-icon-appear={animationStep >= 1}
          >
            <div
              class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl w-24 h-24 flex items-center justify-center shadow-2xl shadow-blue-500/50 cert-pulse"
            >
              <svg
                class="w-12 h-12 text-white cert-draw"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <!-- SIIT Text Animation - Now properly spaced below -->
    {#if animationStep >= 2}
      <div class="text-center px-4 mt-12">
        <div
          class="text-2xl sm:text-3xl lg:text-4xl text-white font-cursive writing-animation leading-relaxed"
        >
          Standard Institute of Information Technology
        </div>
      </div>
    {/if}
  </div>
{/if}

<main
  class="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
  class:opacity-0={showAnimation}
>
  <!-- Modern Background Pattern -->
  <div class="fixed inset-0">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.3),rgba(255,255,255,0))]"
    ></div>
    <div class="cert-orbs">
      <div class="cert-orb cert-orb-1"></div>
      <div class="cert-orb cert-orb-2"></div>
      <div class="cert-orb cert-orb-3"></div>
    </div>
  </div>

  <!-- Content Container -->
  <div class="relative z-10 min-h-screen">
    <!-- Mobile-First Header -->
    <header class="w-full bg-white/5 border-b border-white/10 p-4 sm:p-6">
      <div class="flex flex-col items-center text-center space-y-4">
        <!-- Verified Text -->
        <div class="text-center">
          <h1 class="text-white font-bold text-xl font-space-grotesk mb-1">
            VERIFIED
          </h1>
          <p class="text-blue-300 text-sm font-inter mb-6">
            Certificate Authentic
          </p>
        </div>

        <!-- Checkmark and Logo Side by Side -->
        <div class="flex items-center justify-center gap-6">
          <div
            class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center verified-pulse"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div class="w-16 h-16">
            <img
              src="/logo_white.png"
              alt="SIIT"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content - Mobile Optimized -->
    <div class="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <!-- Hero Section -->
      <div class="text-center space-y-6 slide-in-up">
        <div
          class="inline-flex items-center justify-center w-24 h-24 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl certificate-glow"
        >
          <svg
            class="w-12 h-12 sm:w-10 sm:h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div class="space-y-4">
          <h1
            class="text-4xl sm:text-3xl lg:text-4xl font-bold text-white font-space-grotesk leading-tight"
          >
            Certificate of
            <span
              class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2"
            >
              Achievement
            </span>
          </h1>
          <p class="text-gray-300 font-inter text-lg sm:text-base">
            Issued by Standard Institute of Information Technology
          </p>
        </div>
      </div>

      <!-- Student Profile Card -->
      <div class="card-modern slide-in-left">
        <div class="space-y-4">
          <div class="flex items-center justify-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center avatar-glow"
            >
              <span class="text-white font-bold text-2xl font-space-grotesk">
                {student.studentName.charAt(0)}
              </span>
            </div>
          </div>
          <div class="text-center space-y-3">
            <h2 class="text-2xl font-bold text-white font-space-grotesk">
              {student.studentName}
            </h2>
            <p class="text-gray-300 font-inter">
              Son/Daughter of {student.fatherName}
            </p>
            <div class="flex flex-wrap items-center justify-center gap-3 mt-4">
              <span
                class="px-4 py-2 bg-green-500/20 text-green-300 text-sm font-semibold rounded-full border border-green-500/30 font-inter"
              >
                Grade: {student.grade}
              </span>
              <span
                class="px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full border border-blue-500/30 font-inter"
              >
                Age: {student.age}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Course Information -->
      <div class="card-modern slide-in-right">
        <div class="space-y-6">
          <div class="text-center">
            <div
              class="inline-flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-xl mb-3"
            >
              <svg
                class="w-6 h-6 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white font-space-grotesk">
              Course Completed
            </h3>
            <p class="text-orange-300 font-inter mt-2 text-lg">
              {student.course}
            </p>
          </div>

          <div class="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4
              class="text-base font-semibold text-emerald-300 mb-3 font-space-grotesk text-center"
            >
              Course Content
            </h4>
            <p class="text-gray-300 leading-relaxed font-inter text-center">
              {student.courseContent}
            </p>
          </div>
        </div>
      </div>

      <!-- Registration Details -->
      <div class="card-modern slide-in-up">
        <div class="space-y-6">
          <div class="text-center">
            <div
              class="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-xl mb-3"
            >
              <svg
                class="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white font-space-grotesk">
              Registration Details
            </h3>
          </div>

          <div
            class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20 space-y-4"
          >
            <div class="text-center">
              <p
                class="text-cyan-300 text-sm font-semibold mb-2 font-space-grotesk"
              >
                REGISTRATION NUMBER
              </p>
              <p class="text-white font-mono text-lg font-bold">
                {student.registrationNumber}
              </p>
            </div>
            <div class="text-center">
              <p
                class="text-cyan-300 text-sm font-semibold mb-2 font-space-grotesk"
              >
                VERIFIED ON
              </p>
              <p class="text-white text-base font-bold font-inter">
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Signatures Section -->
      <div class="card-modern slide-in-scale">
        <div class="text-center space-y-6">
          <h3 class="text-xl font-semibold text-white font-space-grotesk">
            Authorized By
          </h3>

          <div class="space-y-6">
            <div class="text-center">
              <div
                class="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center"
              >
                <span class="text-white font-bold text-lg">MA</span>
              </div>
              <p class="text-white font-semibold text-lg font-space-grotesk">
                Muhammad Arsalan Ahmad
              </p>
              <p class="text-gray-400 text-sm font-inter">
                Program Coordinator
              </p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center"
              >
                <span class="text-white font-bold text-lg">AH</span>
              </div>
              <p class="text-white font-semibold text-lg font-space-grotesk">
                Aashiq Hussain Bukhari
              </p>
              <p class="text-gray-400 text-sm font-inter">Principal</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons Section -->
      <div class="card-modern slide-in-scale">
        <div class="space-y-6">
          <h3 class="text-xl font-semibold text-white font-space-grotesk text-center">
            Actions
          </h3>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button
              on:click={() => window.print()}
              class="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] font-inter shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              <span>Print Certificate</span>
            </button>

            <a
              href="/"
              class="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] font-inter flex items-center justify-center gap-3"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Back to Home</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Institution Footer -->
      <div class="text-center space-y-4 pt-6">
        <h4 class="text-white font-bold text-xl font-space-grotesk">
          Standard Institute of Information Technology
        </h4>
        <p class="text-blue-300 text-base italic font-inter">
          "Knowledge, Skill, Integrity."
        </p>
        <div class="flex items-center justify-center gap-2 text-gray-400">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span class="font-inter text-sm">For assistance: +92 321 9392004</span>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap");

  :global(body) {
    margin: 0;
    font-family:
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      sans-serif;
    background: #0f0f23;
    overflow-x: hidden;
  }

  :global(*) {
    box-sizing: border-box;
  }

  .font-inter {
    font-family: "Inter", sans-serif;
  }

  .font-space-grotesk {
    font-family: "Space Grotesk", sans-serif;
  }

  .font-cursive {
    font-family: "Dancing Script", cursive;
  }

  /* Modern Background Elements */
  .cert-orbs {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }

  .cert-orb {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(59, 130, 246, 0.3),
      rgba(59, 130, 246, 0.1)
    );
    animation: certFloat 25s infinite ease-in-out;
    filter: blur(1px);
  }

  .cert-orb-1 {
    width: 250px;
    height: 250px;
    top: 15%;
    left: -8%;
    animation-delay: 0s;
  }

  .cert-orb-2 {
    width: 350px;
    height: 350px;
    top: 55%;
    right: -12%;
    animation-delay: 8s;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(147, 51, 234, 0.25),
      rgba(147, 51, 234, 0.08)
    );
  }

  .cert-orb-3 {
    width: 180px;
    height: 180px;
    bottom: 15%;
    left: 45%;
    animation-delay: 16s;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(99, 102, 241, 0.2),
      rgba(99, 102, 241, 0.05)
    );
  }

  @keyframes certFloat {
    0%,
    100% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-25px) translateX(20px) rotate(90deg);
    }
    50% {
      transform: translateY(15px) translateX(-15px) rotate(180deg);
    }
    75% {
      transform: translateY(-10px) translateX(30px) rotate(270deg);
    }
  }

  /* Modern Card Design */
  .card-modern {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 1.5rem;
    padding: 2rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-modern:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.12);
  }

  @media (min-width: 640px) {
    .card-modern {
      padding: 2.5rem;
      margin-bottom: 2rem;
    }
  }

  /* Verified Pulse Animation */
  .verified-pulse {
    animation: verifiedPulse 2s ease-in-out infinite;
  }

  @keyframes verifiedPulse {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
      transform: scale(1.05);
    }
  }

  /* Certificate Glow */
  .certificate-glow {
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.4);
    animation: certificateGlow 3s ease-in-out infinite alternate;
  }

  @keyframes certificateGlow {
    from {
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.4);
    }
    to {
      box-shadow: 0 0 60px rgba(59, 130, 246, 0.6);
    }
  }

  /* Avatar Glow */
  .avatar-glow {
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
    animation: avatarGlow 4s ease-in-out infinite alternate;
  }

  @keyframes avatarGlow {
    from {
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
    }
    to {
      box-shadow: 0 0 45px rgba(59, 130, 246, 0.5);
    }
  }

  /* Slide Animations */
  .slide-in-up {
    animation: slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .slide-in-left {
    animation: slideInLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
    opacity: 0;
  }

  .slide-in-right {
    animation: slideInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
    opacity: 0;
  }

  .slide-in-scale {
    animation: slideInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
    opacity: 0;
    transform: scale(0.8);
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInScale {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Loading Animation Styles */
  .fade-out {
    animation: fadeOut 0.5s ease-out forwards;
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }

  /* New Certificate Loading Animation */
  .cert-morph {
    position: relative;
    width: 120px;
    height: 120px;
  }

  .cert-animate {
    animation: certMorph 0.8s ease-out forwards;
  }

  @keyframes certMorph {
    0% {
      transform: scale(0) rotate(180deg);
      opacity: 0;
    }
    50% {
      transform: scale(1.2) rotate(90deg);
      opacity: 0.8;
    }
    100% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
  }

  .cert-particles {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
    border-radius: 50%;
    animation: particleFloat 2s ease-in-out infinite;
  }

  .particle-1 {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  .particle-2 {
    top: 20%;
    right: 15%;
    animation-delay: 0.3s;
  }

  .particle-3 {
    bottom: 25%;
    left: 20%;
    animation-delay: 0.6s;
  }

  .particle-4 {
    bottom: 15%;
    right: 10%;
    animation-delay: 0.9s;
  }

  @keyframes particleFloat {
    0%,
    100% {
      transform: translateY(0) scale(1);
      opacity: 0.7;
    }
    50% {
      transform: translateY(-20px) scale(1.5);
      opacity: 1;
    }
  }

  .cert-icon-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .cert-icon-appear {
    animation: certIconAppear 0.6s ease-out 0.2s forwards;
  }

  @keyframes certIconAppear {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.3) rotateY(180deg);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1) rotateY(0deg);
    }
  }

  .cert-pulse {
    animation: certPulse 1.5s ease-in-out infinite;
  }

  @keyframes certPulse {
    0%,
    100% {
      transform: scale(1);
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
    }
  }

  .cert-draw {
    stroke-dasharray: 24;
    stroke-dashoffset: 24;
    animation: drawCert 0.8s ease-out 0.4s forwards;
  }

  @keyframes drawCert {
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

  main {
    transition: opacity 0.5s ease-in;
  }

  /* Mobile-First Responsive Design */
  @media (max-width: 768px) {
    .cert-orb {
      display: none;
    }
  }

  /* Print Optimizations */
  @media print {
    .cert-orbs,
    .cert-orb,
    header,
    .fixed {
      display: none !important;
    }

    main {
      background: white !important;
      color: black !important;
    }

    .card-modern {
      background: white !important;
      border: 2px solid #000 !important;
      box-shadow: none !important;
      break-inside: avoid;
    }

    .text-white,
    .text-gray-300 {
      color: black !important;
    }

    .text-emerald-300,
    .text-green-300,
    .text-cyan-300,
    .text-orange-300 {
      color: #374151 !important;
    }

    .bg-gradient-to-r {
      background: #f3f4f6 !important;
    }
  }

  /* Accessibility Improvements */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* CSS Custom Properties for Theme Colors */
  :root {
    --color-primary-text: #f8fafc;
    --color-secondary-text: #e2e8f0;
    --color-accent-text: #60a5fa;
    --color-muted-text: #94a3b8;
    --color-background: linear-gradient(135deg, #0f172a, #1e293b, #3730a3);
    --color-card-bg: rgba(255, 255, 255, 0.08);
    --color-border: rgba(255, 255, 255, 0.12);
    --color-success: #10b981;
    --color-warning: #f59e0b;
    --color-error: #ef4444;
    --color-blue: #3b82f6;
    --color-purple: #8b5cf6;
  }

  /* Apply CSS Variables */
  .text-primary {
    color: var(--color-primary-text) !important;
  }
  .text-secondary {
    color: var(--color-secondary-text) !important;
  }
  .text-accent {
    color: var(--color-accent-text) !important;
  }
  .text-muted {
    color: var(--color-muted-text) !important;
  }
</style>