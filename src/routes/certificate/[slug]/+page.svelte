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
                <div class="mt-16 text-center">
                    <div
                        class="text-4xl text-white font-cursive writing-animation"
                    >
                        Standard Institute of Information Technology
                    </div>
                </div>
            {/if}
        </div>
    </div>
{/if}

<main
    class="min-h-screen relative overflow-hidden"
    class:opacity-0={showAnimation}
>
    <!-- Dynamic Background -->
    <div class="fixed inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
    <div class="fixed inset-0">
        <div class="certificate-shapes">
            <div class="cert-shape cert-shape-1"></div>
            <div class="cert-shape cert-shape-2"></div>
            <div class="cert-shape cert-shape-3"></div>
            <div class="cert-shape cert-shape-4"></div>
            <div class="cert-shape cert-shape-5"></div>
        </div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 flex flex-col min-h-screen">
        <!-- Header -->
        <header class="flex justify-between items-center p-4 sm:p-6 lg:p-8">
            <div class="flex items-center space-x-3">
                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500/20 rounded-xl backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center">
                    <svg class="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div class="text-white">
                    <h1 class="text-xl sm:text-2xl font-bold font-space-grotesk">SIIT</h1>
                    <p class="text-xs sm:text-sm text-white/70 font-inter">Certificate Verified</p>
                </div>
            </div>
            <div class="w-20 h-20 sm:w-24 sm:h-24 opacity-90">
                <img src="/logo_white.png" alt="SIIT Logo" class="w-full h-full object-contain drop-shadow-lg"/>
            </div>
        </header>

        <!-- Main Content -->
        <div class="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
            <div class="w-full max-w-4xl">
                <!-- Certificate Card -->
                <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl certificate-card">
                    <!-- Header with Verification Badge -->
                    <div class="flex flex-col sm:flex-row items-center justify-between mb-8">
                        <div class="flex items-center space-x-4 mb-4 sm:mb-0">
                            <div class="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg verified-badge">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                            <div>
                                <h2 class="text-2xl font-bold text-white font-space-grotesk">Certificate Verified</h2>
                                <p class="text-emerald-300 font-inter">Authentic & Valid</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-white/80 font-inter text-sm">Verified on</p>
                            <p class="text-white font-semibold font-inter">{new Date().toLocaleDateString()}</p>
                        </div>
                    </div>

                    <!-- Certificate Title -->
                    <div class="text-center mb-8">
                        <h1 class="text-3xl sm:text-4xl font-bold text-white mb-4 font-space-grotesk">
                            Certificate of Completion
                        </h1>
                        <div class="w-32 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
                    </div>

                    <!-- Student Information Grid -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
                        <!-- Left Column -->
                        <div class="space-y-6">
                            <div class="info-card">
                                <label class="info-label">Student Name</label>
                                <div class="info-value">{student.studentName}</div>
                            </div>
                            
                            <div class="info-card">
                                <label class="info-label">Father/Guardian</label>
                                <div class="info-value">{student.fatherName}</div>
                            </div>
                            
                            <div class="info-card">
                                <label class="info-label">Registration Number</label>
                                <div class="info-value font-mono tracking-wide">{student.registrationNumber}</div>
                            </div>
                        </div>

                        <!-- Right Column -->
                        <div class="space-y-6">
                            <div class="info-card">
                                <label class="info-label">Course</label>
                                <div class="info-value">{student.course}</div>
                            </div>
                            
                            <div class="info-card">
                                <label class="info-label">Age</label>
                                <div class="info-value">{student.age} years</div>
                            </div>
                            
                            <div class="info-card grade-card">
                                <label class="info-label">Grade</label>
                                <div class="text-3xl font-bold text-emerald-300 font-space-grotesk">{student.grade}</div>
                            </div>
                        </div>
                    </div>

                    <!-- Course Content -->
                    <div class="mb-8">
                        <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
                            <label class="block text-emerald-300 font-semibold mb-3 font-space-grotesk">Course Content</label>
                            <p class="text-white/90 leading-relaxed font-inter">{student.courseContent}</p>
                        </div>
                    </div>

                    <!-- Signatures Section -->
                    <div class="border-t border-white/20 pt-8">
                        <h3 class="text-xl font-semibold text-white mb-6 text-center font-space-grotesk">
                            Authorized Signatures
                        </h3>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <!-- Coordinator Signature -->
                            <div class="text-center signature-box">
                                <div class="h-16 flex items-center justify-center mb-3">
                                    <img src="/signature1.png" alt="Coordinator Signature" class="max-h-full opacity-80" style="display: none;"/>
                                    <div class="text-white/60 text-sm italic font-inter">Digital Signature</div>
                                </div>
                                <div class="border-t border-white/40 pt-3">
                                    <div class="text-white font-semibold font-space-grotesk">Coordinator</div>
                                    <div class="text-white/80 text-sm font-inter">John Smith</div>
                                </div>
                            </div>

                            <!-- Director Signature -->
                            <div class="text-center signature-box">
                                <div class="h-16 flex items-center justify-center mb-3">
                                    <img src="/signature2.png" alt="Director Signature" class="max-h-full opacity-80" style="display: none;"/>
                                    <div class="text-white/60 text-sm italic font-inter">Digital Signature</div>
                                </div>
                                <div class="border-t border-white/40 pt-3">
                                    <div class="text-white font-semibold font-space-grotesk">Director</div>
                                    <div class="text-white/80 text-sm font-inter">Jane Doe</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div class="text-center mt-8 pt-6 border-t border-white/20">
                        <h4 class="text-white font-semibold mb-2 font-space-grotesk">
                            Standard Institute of Information Technology
                        </h4>
                        <p class="text-emerald-300 text-sm font-inter mb-2">"Knowledge, Skill, Integrity."</p>
                        <div class="flex items-center justify-center space-x-2 text-white/60 text-xs">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <span class="font-inter">For assistance: +92 321 9392004</span>
                        </div>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <button
                        onclick="window.print()"
                        class="relative group w-full sm:w-auto"
                    >
                        <div class="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-200"></div>
                        <div class="relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-semibold rounded-2xl transition-all duration-200 transform group-hover:scale-[1.02] group-active:scale-[0.98] font-inter">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                            </svg>
                            Print Certificate
                        </div>
                    </button>

                    <a href="/" class="relative group w-full sm:w-auto">
                        <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-200"></div>
                        <div class="relative flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-2xl transition-all duration-200 transform group-hover:scale-[1.02] group-active:scale-[0.98] font-inter backdrop-blur-sm">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                            </svg>
                            Verify Another
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap");

    :global(body) {
        margin: 0;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        background: #0f0f23;
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

    /* Certificate Background Shapes */
    .certificate-shapes {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .cert-shape {
        position: absolute;
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.05));
        border-radius: 50%;
        animation: certFloat 25s infinite ease-in-out;
    }

    .cert-shape-1 { width: 300px; height: 300px; top: 10%; left: 5%; animation-delay: 0s; }
    .cert-shape-2 { width: 200px; height: 200px; top: 50%; right: 10%; animation-delay: 8s; }
    .cert-shape-3 { width: 150px; height: 150px; bottom: 30%; left: 15%; animation-delay: 16s; }
    .cert-shape-4 { width: 250px; height: 250px; top: 30%; right: 30%; animation-delay: 4s; }
    .cert-shape-5 { width: 120px; height: 120px; bottom: 10%; right: 40%; animation-delay: 12s; }

    @keyframes certFloat {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        20% { transform: translateY(-20px) translateX(15px) rotate(72deg); }
        40% { transform: translateY(10px) translateX(-10px) rotate(144deg); }
        60% { transform: translateY(-15px) translateX(20px) rotate(216deg); }
        80% { transform: translateY(25px) translateX(-5px) rotate(288deg); }
    }

    /* Certificate Card Animation */
    .certificate-card {
        animation: slideInUp 0.8s ease-out;
    }

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Verified Badge Animation */
    .verified-badge {
        animation: verifiedPulse 2s ease-in-out infinite alternate;
    }

    @keyframes verifiedPulse {
        from { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
        to { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8); }
    }

    /* Info Card Styles */
    .info-card {
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        backdrop-filter: blur(8px);
        transition: all 0.3s ease;
    }

    .info-card:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateY(-2px);
    }

    .info-label {
        display: block;
        font-size: 0.875rem;
        font-weight: 600;
        color: rgba(52, 211, 153, 0.9);
        margin-bottom: 0.5rem;
        font-family: "Space Grotesk", sans-serif;
    }

    .info-value {
        font-size: 1.125rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.95);
        font-family: "Inter", sans-serif;
    }

    .grade-card {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.05));
        border-color: rgba(16, 185, 129, 0.3);
    }

    /* Signature Box */
    .signature-box {
        padding: 1rem;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        transition: all 0.3s ease;
    }

    .signature-box:hover {
        background: rgba(255, 255, 255, 0.05);
    }

    /* Animation Styles */
    .fade-out {
        animation: fadeOut 0.5s ease-out forwards;
    }

    @keyframes fadeOut {
        to { opacity: 0; }
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
        0% { top: -100px; opacity: 1; }
        70% { top: 0px; }
        100% { top: 0px; opacity: 0; }
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
        0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
        40%, 43% { transform: translateY(-10px); }
        70% { transform: translateY(-5px); }
        90% { transform: translateY(-2px); }
    }

    .checkmark-draw {
        stroke-dasharray: 20;
        stroke-dashoffset: 20;
        animation: drawCheck 0.5s ease-out 0.2s forwards;
    }

    @keyframes drawCheck {
        to { stroke-dashoffset: 0; }
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

    /* Mobile Optimizations */
    @media (max-width: 768px) {
        .cert-shape { display: none; }
        
        .certificate-card {
            padding: 1.5rem;
        }
        
        .info-card {
            padding: 0.75rem;
        }
    }

    /* Print Styles */
    @media print {
        .cert-shape,
        .certificate-shapes,
        [onclick="window.print()"],
        a[href="/"] {
            display: none !important;
        }
        
        .certificate-card {
            background: white !important;
            color: black !important;
            border: 2px solid #000 !important;
        }
        
        .info-value,
        .text-white {
            color: black !important;
        }
        
        .info-label {
            color: #059669 !important;
        }
    }

    /* CSS Custom Properties for Theme Colors */
    :root {
        --color-primary-text: #f8fafc;
        --color-secondary-text: #e2e8f0;
        --color-accent-text: #34d399;
        --color-muted-text: #94a3b8;
        --color-background: #0f0f23;
        --color-card-bg: rgba(255, 255, 255, 0.1);
        --color-border: rgba(255, 255, 255, 0.2);
        --color-success: #10b981;
        --color-warning: #f59e0b;
        --color-error: #ef4444;
    }

    /* Apply CSS Variables to Text */
    .text-primary { color: var(--color-primary-text) !important; }
    .text-secondary { color: var(--color-secondary-text) !important; }
    .text-accent { color: var(--color-accent-text) !important; }
    .text-muted { color: var(--color-muted-text) !important; }
</style>
