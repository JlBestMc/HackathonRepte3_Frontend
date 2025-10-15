import { createClient, type AuthResponse } from '@supabase/supabase-js'
import { SUPABASEURL, SUPABASEANONKEY } from '@/config/config'

// Validate env variables early to provide a clear actionable error instead of
// the generic "supabaseUrl is required" from the SDK.
if (!SUPABASEURL) {
    throw new Error(
        'Falta la variable de entorno VITE_SUPABASE_URL. Crea un archivo .env.local en la raíz del proyecto con VITE_SUPABASE_URL="https://<your-project>.supabase.co"'
    )
}

if (!SUPABASEANONKEY) {
    throw new Error(
        'Falta la variable de entorno VITE_SUPABASE_ANON_KEY. Crea un archivo .env.local con VITE_SUPABASE_ANON_KEY="<public-anon-key>"'
    )
}

export const supabase = createClient(SUPABASEURL, SUPABASEANONKEY)

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
