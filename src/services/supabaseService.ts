import { createClient, type AuthResponse } from '@supabase/supabase-js'
import { SUPABASEURL, SUPABASEANONKEY } from '@/config/config'

// Validate env variables early to provide a clear actionable error instead of
// the generic "supabaseUrl is required" from the SDK.
// Normalize values: trim spaces and surrounding quotes
const _SUPABASE_URL = (SUPABASEURL ?? '').trim().replace(/^['"]|['"]$/g, '')
const _SUPABASE_ANON_KEY = (SUPABASEANONKEY ?? '')
    .trim()
    .replace(/^['"]|['"]$/g, '')

if (!_SUPABASE_URL) {
    throw new Error(
        'Falta la variable de entorno VITE_SUPABASE_URL. Crea un archivo .env.local en la raíz del proyecto con VITE_SUPABASE_URL="https://<your-project>.supabase.co"'
    )
}

if (!_SUPABASE_ANON_KEY) {
    throw new Error(
        'Falta la variable de entorno VITE_SUPABASE_ANON_KEY. Crea un archivo .env.local con VITE_SUPABASE_ANON_KEY="<public-anon-key>"'
    )
}

// Validate URL scheme
if (!/^https?:\/\//i.test(_SUPABASE_URL)) {
    throw new Error(
        'VITE_SUPABASE_URL inválida: Debe empezar por http:// o https:// y tener el formato https://<project-ref>.supabase.co (sin comillas).'
    )
}

export const supabase = createClient(_SUPABASE_URL, _SUPABASE_ANON_KEY)

export const registerUser = async (
    email: string,
    password: string,
    username: string
): Promise<AuthResponse> => {
    return await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { username },
        },
    })
}

export const signInWithPassword = async (
    email: string,
    password: string
): Promise<AuthResponse> => {
    return await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
}
