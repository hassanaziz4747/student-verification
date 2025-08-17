<!-- src/routes/+error.svelte -->
<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    $: errorMessage = $page.error?.message || "Something went wrong";
    $: errorStatus = $page.status || 404;

    let mounted = false;

    onMount(() => {
        mounted = true;
    });

    function goBack() {
        window.history.back();
    }
</script>

<svelte:head>
    <title>Student Not Found - SIIT</title>
    <meta name="description" content="Student certificate not found" />
    <link rel="icon" href="/favicon.ico" />
</svelte:head>

<main class="min-h-screen relative overflow-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 bg-gradient-to-br from-red-900 via-orange-900 to-purple-900"></div>
    <div class="fixed inset-0">
        <div class="error-shapes">
            <div class="error-shape error-shape-1"></div>
            <div class="error-shape error-shape-2"></div>
            <div class="error-shape error-shape-3"></div>
            <div class="error-shape error-shape-4"></div>
        </div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 flex flex-col min-h-screen">
        <!-- Header -->
        <header class="flex justify-between items-center p-4 sm:p-6 lg:p-8">
            <div class="flex items-center space-x-3">
                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <svg class="w-6 h-6 sm:w-8 sm:h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                </div>
                <div class="text-white">
                    <h1 class="text-xl sm:text-2xl font-bold font-space-grotesk">SIIT</h1>
                    <p class="text-xs sm:text-sm text-white/70 font-inter">Certificate Verification</p>
                </div>
            </div>
            <div class="w-20 h-20 sm:w-24 sm:h-24 opacity-90">
                <img src="/logo_white.png" alt="SIIT Logo" class="w-full h-full object-contain drop-shadow-lg"/>
            </div>
        </header>

        <!-- Main Content -->
        <div class="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
            <div class="w-full max-w-2xl text-center">
                <!-- Error Animation -->
                <div class="error-animation" class:animate={mounted}>
                    <!-- Animated Error Icon -->
                    <div class="inline-flex items-center justify-center w-32 h-32 mb-8 relative">
                        <div class="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full animate-pulse"></div>
                        <div class="relative w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                            <svg class="w-12 h-12 text-white bounce-animation" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                            </svg>
                        </div>
                    </div>

                    <!-- Error Title -->
                    <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-space-grotesk slide-in-left">
                        {#if errorStatus === 404}
                            4<span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">0</span>4
                        {:else}
                            {errorStatus}
                        {/if}
                    </h1>

                    <!-- Error Message -->
                    <div class="space-y-4 mb-12 slide-in-right">
                        <h2 class="text-2xl sm:text-3xl font-semibold text-white font-space-grotesk">
                            {#if errorStatus === 404}
                                Certificate Not Found
                            {:else}
                                Something Went Wrong
                            {/if}
                        </h2>
                        <p class="text-lg text-gray-300 max-w-lg mx-auto font-inter leading-relaxed">
                            {#if errorStatus === 404}
                                The certificate you're looking for doesn't exist or has been removed from our system.
                            {:else}
                                {errorMessage}
                            {/if}
                        </p>
                    </div>

                    <!-- Help Section -->
                    <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 mb-8 slide-in-up">
                        <h3 class="text-xl font-semibold text-white mb-4 font-space-grotesk">What can you try?</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                            <div class="flex items-start space-x-3">
                                <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-white font-medium font-inter">Check Number</p>
                                    <p class="text-gray-400 text-sm font-inter">Verify registration number format</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-white font-medium font-inter">Scan QR Code</p>
                                    <p class="text-gray-400 text-sm font-inter">Use QR scanner properly</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-white font-medium font-inter">Get Help</p>
                                    <p class="text-gray-400 text-sm font-inter">Contact support team</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 slide-in-up">
                        <button
                            on:click={goBack}
                            class="relative group w-full sm:w-auto"
                        >
                            <div class="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-200"></div>
                            <div class="relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-semibold rounded-2xl transition-all duration-200 transform group-hover:scale-[1.02] group-active:scale-[0.98] font-inter">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                                </svg>
                                Go Back
                            </div>
                        </button>

                        <a href="/" class="relative group w-full sm:w-auto">
                            <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-200"></div>
                            <div class="relative flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-2xl transition-all duration-200 transform group-hover:scale-[1.02] group-active:scale-[0.98] font-inter backdrop-blur-sm">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                </svg>
                                Home
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="text-center py-6 px-4">
            <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
                <h3 class="text-white font-semibold mb-2 font-space-grotesk">Standard Institute of Information Technology</h3>
                <div class="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span class="font-inter">For assistance: +92 321 9392004</span>
                </div>
            </div>
        </footer>
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap");

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

    /* Error Background Shapes */
    .error-shapes {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .error-shape {
        position: absolute;
        background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 101, 101, 0.05));
        border-radius: 50%;
        animation: errorFloat 15s infinite ease-in-out;
    }

    .error-shape-1 { width: 200px; height: 200px; top: 20%; left: 10%; animation-delay: 0s; }
    .error-shape-2 { width: 300px; height: 300px; top: 50%; right: 10%; animation-delay: 5s; }
    .error-shape-3 { width: 150px; height: 150px; bottom: 30%; left: 30%; animation-delay: 10s; }
    .error-shape-4 { width: 100px; height: 100px; top: 30%; left: 60%; animation-delay: 7s; }

    @keyframes errorFloat {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
        50% { transform: translateY(20px) translateX(-10px) rotate(180deg); }
        75% { transform: translateY(-10px) translateX(5px) rotate(270deg); }
    }

    /* Error Animation */
    .error-animation {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.8s ease-out;
    }

    .error-animation.animate {
        opacity: 1;
        transform: translateY(0);
    }

    /* Bounce Animation */
    .bounce-animation {
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
        0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
        40%, 43% { transform: translateY(-10px); }
        70% { transform: translateY(-5px); }
        90% { transform: translateY(-2px); }
    }

    /* Slide Animations */
    .slide-in-left {
        animation: slideInLeft 0.6s ease-out 0.2s both;
    }

    .slide-in-right {
        animation: slideInRight 0.6s ease-out 0.4s both;
    }

    .slide-in-up {
        animation: slideInUp 0.6s ease-out 0.6s both;
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
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

    /* Mobile Optimizations */
    @media (max-width: 640px) {
        .error-shape { display: none; }
        
        .slide-in-left,
        .slide-in-right,
        .slide-in-up {
            animation-delay: 0.1s;
        }
    }

    /* CSS Custom Properties for Theme Colors */
    :root {
        --color-primary-text: #f8fafc;
        --color-secondary-text: #e2e8f0;
        --color-accent-text: #60a5fa;
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
