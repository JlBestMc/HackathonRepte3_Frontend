import { transformToId } from '@/lib/utils'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@components/ui/base/tabs'
import ButtonSignOut from '@/components/ui/ButtonSignOut'
import ContentArticle from '@components/ui/ContentArticle'
import HeaderArticle from '@/components/ui/HeaderArticle'
import Account from '@/components/profile/Account'
import Appearance from '@/components/profile/Appearance'
import content from '@/config/data/pages/profile'

const Profile = () => {
    const account = transformToId(`${content.textAccount}`)
    const appearance = transformToId(`${content.textAppearence}`)

    return (
        <>
            <HeaderArticle title={content.title}>
                <ButtonSignOut size="sm" />
            </HeaderArticle>
            <ContentArticle>
                <Tabs aria-label="Settings" defaultValue={account}>
                    <div className="flex justify-between items-center">
                        <TabsList>
                            <TabsTrigger value={account}>
                                {content.textAccount}
                            </TabsTrigger>
                            <TabsTrigger value={appearance}>
                                {content.textAppearence}
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value={account}>
                        <Account />
                    </TabsContent>
                    <TabsContent value={appearance}>
                        <Appearance />
                    </TabsContent>
                </Tabs>
            </ContentArticle>
        </>
    )
}

export default Profile
