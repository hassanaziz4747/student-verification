<script>
  export let data;
  const { student } = data;
</script>

<svelte:head>
  <title>Certificate Verification - {student.studentName}</title>
  <meta
    name="description"
    content="Certificate verification for {student.studentName}"
  />
  <link rel="icon" href="/favicon.ico" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Ubuntu:ital@0,1;wght@300;400;500;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class="min-h-screen flex items-center justify-center p-4">
  <!-- Background with elegant tech/education theme -->
  <div
    class="fixed inset-0 bg-cover bg-center bg-no-repeat"
    style="background-image: url('https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg');"
  ></div>

  <!-- Enhanced frosted glass card with glow -->
  <div
    class="relative backdrop-blur-xl bg-gradient-to-br from-white/25 via-white/20 to-white/15 border border-white/40 rounded-3xl shadow-2xl shadow-cyan-500/20 p-8 max-w-2xl w-full mx-4 before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:p-[2px] before:bg-gradient-to-br before:from-cyan-400/30 before:via-blue-400/30 before:to-purple-400/30 before:-z-10 before:blur-sm"
  >
    <!-- Verified mark in top left corner -->
    <div class="absolute top-4 left-4 w-16 h-16 opacity-90">
      <div
        class="w-full h-full bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"
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
    <div class="absolute top-4 right-4 w-20 h-20 opacity-90">
      <img
        src="/logo_white.png"
        alt="SIIT Logo"
        class="w-full h-full object-contain drop-shadow-lg"
      />
    </div>

    <!-- Certificate content -->
    <div class="space-y-6 text-white mt-4">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold mb-2 text-white/95 drop-shadow-sm">
          Certificate Verification
        </h1>
        <div
          class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full shadow-sm"
        ></div>
      </div>

      <div class="grid gap-4 text-lg">
        <div class="flex flex-col sm:flex-row">
          <span class="font-semibold text-cyan-200 min-w-[200px] mb-1 sm:mb-0"
            >Registration Number:</span
          >
          <span class="text-white/95 font-medium"
            >{student.registrationNumber}</span
          >
        </div>

        <div class="flex flex-col sm:flex-row">
          <span class="font-semibold text-cyan-200 min-w-[200px] mb-1 sm:mb-0"
            >Student Name:</span
          >
          <span class="text-white/95 font-medium text-xl"
            >{student.studentName}</span
          >
        </div>

        <div class="flex flex-col sm:flex-row">
          <span class="font-semibold text-cyan-200 min-w-[200px] mb-1 sm:mb-0"
            >Father/Guardian:</span
          >
          <span class="text-white/95 font-medium">{student.fatherName}</span>
        </div>

        <div class="flex flex-col sm:flex-row">
          <span class="font-semibold text-cyan-200 min-w-[200px] mb-1 sm:mb-0"
            >Course:</span
          >
          <span class="text-white/95 font-medium">{student.course}</span>
        </div>

        <div class="flex flex-col">
          <span class="font-semibold text-cyan-200 mb-2">Course Content:</span>
          <span
            class="text-white/95 text-base leading-relaxed bg-white/15 p-4 rounded-xl border border-white/30 backdrop-blur-sm"
            >{student.courseContent}</span
          >
        </div>

        <div class="flex flex-col sm:flex-row">
          <span class="font-semibold text-cyan-200 min-w-[200px] mb-1 sm:mb-0"
            >Age:</span
          >
          <span class="text-white/95 font-medium">{student.age} years</span>
        </div>

        <div class="flex flex-col sm:flex-row">
          <span class="font-semibold text-cyan-200 min-w-[200px] mb-1 sm:mb-0"
            >Grade:</span
          >
          <span class="text-2xl font-bold text-green-300 drop-shadow-sm"
            >{student.grade}</span
          >
        </div>
      </div>

      <!-- Signature Section -->
      <div class="mt-8 pt-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <!-- Left Signature -->
          <div class="text-center">
            <div class="mb-2">
              <!-- Placeholder for signature image -->
              <div class="h-16 flex items-center justify-center">
                <img
                  src="/signature1.png"
                  alt="Signature"
                  class="max-h-full opacity-80"
                  style="display: none;"
                />
                <div class="text-white/60 text-sm italic">
                  Signature placeholder
                </div>
              </div>
            </div>
            <div class="border-t border-white/40 pt-2">
              <div class="text-white/90 font-medium">Coordinator</div>
              <div class="text-white/80 text-sm mt-1">John Smith</div>
            </div>
          </div>

          <!-- Right Signature -->
          <div class="text-center">
            <div class="mb-2">
              <!-- Placeholder for signature image -->
              <div class="h-16 flex items-center justify-center">
                <img
                  src="/signature2.png"
                  alt="Signature"
                  class="max-h-full opacity-80"
                  style="display: none;"
                />
                <div class="text-white/60 text-sm italic">
                  Signature placeholder
                </div>
              </div>
            </div>
            <div class="border-t border-white/40 pt-2">
              <div class="text-white/90 font-medium">Director</div>
              <div class="text-white/80 text-sm mt-1">Jane Doe</div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-8 pt-6 border-t border-white/40">
        <p class="text-white/80 text-sm font-medium">
          Standard Institute of Information Technology
        </p>
        <p class="text-white/70 text-xs mt-1">
          Certificate verified on {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  </div>
</main>

<style>
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

  /* Enhanced glow effect */
  .relative::after {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 1.5rem;
    padding: 2px;
    background: linear-gradient(
      45deg,
      rgba(6, 182, 212, 0.3),
      rgba(59, 130, 246, 0.3),
      rgba(147, 51, 234, 0.3)
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
    filter: blur(1px);
  }
</style>
