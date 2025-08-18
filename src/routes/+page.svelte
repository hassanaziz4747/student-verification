<!-- src/routes/+page.svelte -->
<script>
    import { goto } from "$app/navigation";

    let registrationNumber = "";
    let isLoading = false;
    let errorMessage = "";

    async function verifyDertificate() {
        if (!registrationNumber.trim()) {
            errorMessage = "Please enter a registration number";
            return;
        }

        isLoading = true;
        errorMessage = "";

        try {
            // First search by registration number to get the student data
            const response = await fetch(`/api/student/registration/${encodeURIComponent(registrationNumber.trim())}`);
            
            if (response.ok) {
                const student = await response.json();
                // Navigate to the student page using the serial number
                await goto(`/student/${student.serial}`);
            } else {
                const error = await response.json();
                errorMessage = error.error || "Certificate not found. Please check the registration number.";
            }
        } catch (error) {
            errorMessage = "Failed to verify certificate. Please try again.";
        } finally {
            isLoading = false;
        }
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            verifyDertificate();
        }
    }
</script>

<svelte:head>
    <title>SIIT - Certificate Verification Portal</title>
    <meta
        name="description"
        content="Official certificate verification system of Standard Institute of Information Technology"
    />
    <link rel="icon" href="/favicon.ico" />
</svelte:head>

<main class="min-h-screen relative overflow-hidden">
    <!-- Animated Background with Floating Shapes -->
    <div class="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900"></div>
    <div class="fixed inset-0">
        <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
            <div class="shape shape-5"></div>
            <div class="shape shape-6"></div>
        </div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 flex flex-col min-h-screen">
        <!-- Header with Logo -->
        <header class="flex justify-between items-center p-4 sm:p-6 lg:p-8">
            <div class="flex items-center space-x-3">
                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
            <div class="w-full max-w-2xl">
                <!-- Hero Section -->
                <div class="text-center mb-12 hero-animation">
                    <div class="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl mb-6 glow-effect">
                        <svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                    </div>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-space-grotesk">
                        Verify Your
                        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 typing-animation">
                            Certificate
                        </span>
                    </h1>
                    <p class="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto font-inter leading-relaxed">
                        Enter your registration number to instantly verify your certificate from Standard Institute of Information Technology
                    </p>
                </div>

                <!-- Search Card -->
                <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl search-card">
                    <div class="space-y-6">
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </div>
                            <input
                                type="text"
                                bind:value={registrationNumber}
                                on:keypress={handleKeyPress}
                                placeholder="Enter Registration Number (e.g., S25WD-B00-000)"
                                class="block w-full pl-12 pr-4 py-4 text-lg font-medium text-white placeholder-gray-400 bg-white/5 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-200 backdrop-blur-sm font-inter"
                                autocomplete="off"
                                spellcheck="false"
                            />
                        </div>

                        {#if errorMessage}
                            <div class="flex items-center space-x-2 text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                                <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                                </svg>
                                <span class="font-inter">{errorMessage}</span>
                            </div>
                        {/if}

                        <button
                            on:click={verifyDertificate}
                            disabled={isLoading}
                            class="relative w-full group"
                        >
                            <div class="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-200"></div>
                            <div class="relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-2xl transition-all duration-200 transform group-hover:scale-[1.02] group-active:scale-[0.98] font-inter">
                                {#if isLoading}
                                    <svg class="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Verifying...
                                {:else}
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    Verify Certificate
                                {/if}
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Features Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 features-animation">
                    <div class="text-center p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 feature-card">
                        <div class="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl mb-4">
                            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>
                        <h3 class="text-white font-semibold mb-2 font-space-grotesk">Instant Verification</h3>
                        <p class="text-gray-400 text-sm font-inter">Get results in seconds.</p>
                    </div>
                    <div class="text-center p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 feature-card">
                        <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-4">
                            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                            </svg>
                        </div>
                        <h3 class="text-white font-semibold mb-2 font-space-grotesk">100% Secure</h3>
                        <p class="text-gray-400 text-sm font-inter">To safeguard your data.</p>
                    </div>
                    <div class="text-center p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 feature-card">
                        <div class="inline-flex items-center justify-center w-12 h-12 bg-amber-500/20 rounded-xl mb-4">
                            <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <h3 class="text-white font-semibold mb-2 font-space-grotesk">Lightning Fast</h3>
                        <p class="text-gray-400 text-sm font-inter">Optimized performance.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="text-center py-6 px-4">
            <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
                <h3 class="text-white font-semibold mb-2 font-space-grotesk">Standard Institute of Information Technology</h3>
                <p class="text-gray-400 text-sm font-inter mb-3">"Knowledge, Skill, Integrity."</p>
                <div class="flex items-center justify-center space-x-2 text-gray-500 text-xs">
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
        --text-primary: #ffffff;
        --text-secondary: #d1d5db;
        --text-accent: #60a5fa;
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

    /* Floating Background Shapes */
    .floating-shapes {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .shape {
        position: absolute;
        background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(249, 115, 22, 0.1));
        border-radius: 50%;
        animation: float 20s infinite ease-in-out;
    }

    .shape-1 { width: 300px; height: 300px; top: 10%; left: 10%; animation-delay: 0s; }
    .shape-2 { width: 200px; height: 200px; top: 60%; right: 15%; animation-delay: 5s; }
    .shape-3 { width: 150px; height: 150px; bottom: 20%; left: 20%; animation-delay: 10s; }
    .shape-4 { width: 250px; height: 250px; top: 30%; right: 30%; animation-delay: 2s; }
    .shape-5 { width: 100px; height: 100px; bottom: 60%; right: 20%; animation-delay: 8s; }
    .shape-6 { width: 180px; height: 180px; top: 70%; left: 60%; animation-delay: 12s; }

    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-30px) rotate(120deg); }
        66% { transform: translateY(30px) rotate(240deg); }
    }

    /* Hero Animation */
    .hero-animation {
        animation: fadeInUp 0.8s ease-out;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Glow Effect */
    .glow-effect {
        box-shadow: 0 0 50px rgba(245, 158, 11, 0.3);
        animation: pulse-glow 2s ease-in-out infinite alternate;
    }

    @keyframes pulse-glow {
        from { box-shadow: 0 0 50px rgba(245, 158, 11, 0.3); }
        to { box-shadow: 0 0 80px rgba(245, 158, 11, 0.6); }
    }

    /* Typing Animation */
    .typing-animation {
        animation: typing 3s steps(11) infinite;
    }

    @keyframes typing {
        0%, 50% { width: 0; }
        100% { width: 100%; }
    }

    /* Search Card Animation */
    .search-card {
        animation: slideInUp 0.6s ease-out 0.2s both;
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

    /* Features Animation */
    .features-animation {
        animation: fadeIn 0.8s ease-out 0.4s both;
    }

    .feature-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .feature-card:hover {
        transform: translateY(-8px);
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    /* Mobile Optimizations */
    @media (max-width: 640px) {
        .shape { display: none; }
        
        .hero-animation h1 {
            font-size: 2.5rem;
            line-height: 1.1;
        }
        
        .search-card {
            padding: 1.5rem;
        }
        
        .features-animation {
            margin-top: 2rem;
        }
    }

    /* CSS Custom Properties for Theme Colors */
    :root {
        --color-primary-text: #f8fafc;
        --color-secondary-text: #e2e8f0;
        --color-accent-text: #f59e0b;
        --color-muted-text: #94a3b8;
        --color-background: #18181b;
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
