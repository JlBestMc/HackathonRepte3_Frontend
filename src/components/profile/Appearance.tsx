import { useThemeContext } from '@/hooks/useThemeContext'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/base/card'
import { Sun, Moon, SunMoon } from 'lucide-react'
import content from '@data/profile/appearance'

const Appearance = () => {
    const { setTheme } = useThemeContext()

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <h2>{content.title}</h2>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-8">
                    <div
                        onClick={() => setTheme('light')}
                        className="rounded-lg cursor-pointer"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                            }
                        }}
                    >
                        <Sun />
                        <p className="font-black mt-4">{content.textLight}</p>
                    </div>
                    <div
                        onClick={() => setTheme('dark')}
                        className="rounded-lg cursor-pointer"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                            }
                        }}
                    >
                        <Moon />
                        <p className="font-black mt-4">{content.textDark}</p>
                    </div>
                    <div
                        onClick={() => setTheme('system')}
                        className="rounded-lg cursor-pointer"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                            }
                        }}
                    >
                        <SunMoon />
                        <p className="font-black mt-4">{content.textSystem}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Appearance
