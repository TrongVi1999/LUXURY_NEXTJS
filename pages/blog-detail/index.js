import React from 'react'
import classNames from 'classnames/bind';
import style from '@/styles/blogdetail.module.scss';
import IMGbn from '@/public/images/blogbn.png';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import GalleryIMG from '@/public/images/gallery.png';
import Image from 'next/image';
import Author from '@/views/Blogdetail/Author';
import Share from '@/views/Share/Share';
import WriteComment from '@/views/Blogdetail/WriteComment';
import Blogrecomment from '@/views/Blogdetail/Blogrecomment';
import Comments from '@/views/Blogdetail/Comments';
import TitleLine from '@/components/TitleLine';

const cx = classNames.bind(style);

const data = {
    banner: IMGbn,
    date: 'April 27, 2022',
    author: 'admin',
    type: 'Travel tip',
    title: 'THE unique moment in Danang',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus maximus vehicula. 
    Sed feugiat, tellus vel tristique posuere, diam`,
    galerry: GalleryIMG,
    content1: `<p>When you need a hot meal on a cold night, a hearty bowl of Saigon&#39;s herby soup hits the spot.</p>\n\n<p>On a late-night motorbike ride through Saigon, you can smell the aroma a block away.</p>\n\n<p>It&#39;s the scent of satisfaction: there&#39;s nothing like filing an empty belly with warm food on a cool night. There&#39;s nothing like a bowl of dumplings with tender braised duck thigh floating in a fragrant herbal broth. For some Saigonese, this is what nightlife is all about.</p>\n\n<p>Dumplings are one of the most popular Chinese foods in Saigon, and they come in many different forms. But dumplings in herbal duck soup seems to be Saigon&#39;s favorite at the moment.</p>\n\n<p>The soup, called &quot;Sủi cảo nước tiềm&quot; in Vietnamese, is known for its rich flavor and affordable price. The soup and dumplings without a duck thigh is usually around VND40,000 to 60,000 (US$1.70 - 2.54). Who can resist food that&#39;s both delicious and inexpensive? But bolder, bigger bellies add a large duck thigh to the mix, which often raises the cost to about VND100,000. Still not a bad deal for a dinner that will keep you full till late the next morning.</p>\n\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\" data-widget=\"obj\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td><img alt=\"Công thức nấu canh mandu (há cảo Hàn Quốc) ấm bụng trong ngày lạnh\" src=\"https://media.suckhoecong.vn/thumb_x800x450/Images/Uploaded/Share/2020/10/08/cong-thuc-nau-canh-mandu-ha-cao-han-quoc-am-bung-trong-ngay-lanh11602129330.jpg\" /></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>You can find some of Saigon&#39;s best dumpling spots in District 5, 6 and 11. Chinese eateries have thrived in these neighborhoods for generations, and soup makers here still sell handmade dumplings whipped up from scratch.</p>\n\n<p>The dumplings &ndash; made of wheat and egg flour &ndash; are large, thick and soft, unlike store-bought, ready-made dumplings.</p>\n\n<p>Each exquisite creation is filled with marinated ground pork meat and a whole peeled shrimp.</p>\n\n<p>Sitting at one of these traditional Saigonese stalls, carts or restaurants, you can watch the cooks wrap the dumplings deftly with skillful hands before placing them gently in pots of boiling water.</p>\n\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\" data-widget=\"obj\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td><img alt=\"Hướng dẫn cách nấu canh sủi cảo tuyệt ngon từ A - Z | Bản tin TP.HCM\" src=\"https://www.tphcm.city/wp-content/uploads/2021/08/cach-nau-canh-sui-cao.jpg\" /></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>The best part of the dish is the herbal soup. Each eatery uses a unique recipe, and the result is a rare combination of pungent aromas unlike other soups found around town.</p>\n\n<p>The duck meat is cleaned with Vietnamese rice wine and ginger, then it&rsquo;s marinated in soy sauce, the chef&rsquo;s proprietary blend of seasonings, sugar, and pepper.</p>\n\n<p>Even though each place has its own style, they all follow one rule: the duck must be fried until golden before adding it to the soup.</p>\n\n<p>Pork bones are used to make the broth, then the fried duck is cooked again in the boiling broth along with herbs until it becomes super tender &ndash; the meat falls off the bone and melts in your mouth.</p>\n\n<p>Finally, shiitake mushrooms are added to the mixture, increasing its umami flavor. The last capstone to the dish is one final dash of seasoning &ndash; a short, sharp, shot &ndash; across the top of the now-heaping bowl of soup for a bit of extra kick that hits your nose first as you begin to dig in. Then it hits your tongue. Then it hits your belly.</p>\n\n<p>When customers order, dumplings will be cooked with the broth to absorb all the attractive aroma of the soup. Diners can order for a side of duck meat for a more complete experience. A bowl of dumpling is often served with bok choy, creating a balanced and full meal.</p>\n\n<p>Soy sauce, homemade satay, pepper and vinegar is provided for diners to customize their own sour, spicy and sweet dipping sauce that suit the best with their taste. If you&#39;re not a fan of the herbal soup, you can order the regular dumpling soup with clear broth.</p>\n`,
    content2: `<p>Hue has always been known for its rich and wonderful food culture. In addition to various traditional cakes, there is a unique drink that visitors must try when in the ancient capital: salted coffee.</p>\n\n<p>Over the past 10 years, salted coffee has become quite popular among local people and tourists visiting Hue as a &quot;must-try&quot; drink.</p>\n\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\" data-widget=\"obj\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td><img alt=\"A cup of cold salted coffee tastes better than a hot cup. Photo by Van An\" data-natural-h=\"800\" data-natural-width=\"1200\" data-pwidth=\"680\" data-width=\"1200\" src=\"https://i-english.vnecdn.net/2022/12/30/1-7174-1670251472-8470-1672383967.jpg\" /></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p>&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>Ho Thi Thanh Huong, 40, an architect, is the owner of two salted coffee shops in Hue. In 2010, she and her husband opened a coffee shop on Nguyen Luong Bang Street. Not knowing what to name the shop, Huong named it after his favorite love story: &quot;Salted Coffee,&quot; a novel that was published on social networks. In the early days, the shop only sold traditional coffees. Later on, she and her husband thought about creating their own drink. After doing a bit of research and experimenting with different drinks, they came up with the idea of creating salted coffee.</p>\n\n<p>The waiter will bring the customer a cup with condensed milk at the bottom, to which is added fermented milk and salt. The coffee flows into the cup through a traditional Vietnamese filter placed on top of the cup. The color changes when the coffee is mixed with the ingredients in the cup. The customer just needs to stir and enjoy the coffee. First-time drinkers may find the salted coffee a bit strange or difficult to drink because of the combination of salty, sweet and bitter flavors.</p>\n\n<p>&quot;The coffee shop has existed for more than 12 years using our exclusive recipe,&quot; said Huong. &quot;In the early days, not so many people knew about our salted coffee, so we did not have many customers. Later, more people got to know about the coffee, and we started having more customers.&quot;</p>\n\n<p>Huong says that her greatest joy is when she meets customers who know about the Hue-branded salted coffee.</p>\n\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\" data-widget=\"obj\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td><img alt=\"Salted coffee has a milky white color after mixing. Photo by Van An\" data-natural-h=\"453\" data-natural-width=\"680\" data-pwidth=\"680\" data-width=\"680\" src=\"https://i-english.vnecdn.net/2022/12/30/3-2685-1670251472-8903-1672383968.jpg\" /></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p>&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>In addition to the first salted coffee shop opened in Nguyen Luong Bang street, Huong and her husband opened another shop on Dang Thai Than Street, where they live. As their home is close to the Citadel, the place is always crowded. Every day, the shop is open from 6:30 in the morning to 22:00 at night. During peak hours, customers have to queue to order the drink. The shop serves about 500 cups a day, and each cup costs VND15,000 VND (US$0.63).</p>\n\n<p>As a long-time customer of the shop, Hong Minh, 23, who comes from Quang Dien District, feels that salted coffee has a slightly bitter, aromatic and salty taste, which she says can&#39;t be found anywhere else.</p>\n\n<p>&quot;Since my student days, I have been drinking salted coffee at the shop,&quot; said Minh. &quot;It sounds strange, but it is a harmonious combination of bitter, sweet and salty. It is such an impressive combination.&quot;</p>\n\n<p>Huong and her husband have been approached by people who want to collaborate to open more branches in other provinces. But they have declined because they want to keep salted coffee in Hue to keep it as a unique feature of the ancient imperial capital.</p>\n`,
    hash_tag: ['Culinary', 'Da Nang', 'Couple tour'],
    comments: [{
        img: '',
        name: 'NGUYEN TRONG PHU',
        date: 'Januery 23, 2015  -  10:30 am',
        comment: 'Lorem ipsu m dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem or et faucibus. Nunc  et faucibus. Nuncnare pharin placetis luctus. Morbi ac scelerisque madales a nulla ornare viverra. ',
    },
    {
        img: '',
        name: 'NGUYEN TRONG PHU',
        date: 'Januery 23, 2015  -  10:30 am',
        comment: 'Lorem ipsu m dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem or et faucibus. Nunc  et faucibus. Nuncnare pharin placetis luctus. Morbi ac scelerisque madales a nulla ornare viverra. ',
        reply: [
            {
                img: '',
                name: 'NGUYEN TRONG PHU',
                date: 'Januery 23, 2015  -  10:30 am',
                comment: 'Lorem ipsu m dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem or et faucibus. Nunc  et faucibus. Nuncnare pharin placetis luctus. Morbi ac scelerisque madales a nulla ornare viverra. ',
            }
        ]
    },
    {
        img: '',
        name: 'NGUYEN TRONG PHU',
        date: 'Januery 23, 2015  -  10:30 am',
        comment: 'Lorem ipsu m dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem or et faucibus. Nunc  et faucibus. Nuncnare pharin placetis luctus. Morbi ac scelerisque madales a nulla ornare viverra. ',
    }
    ]
}



const index = () => {
    return (
        <div className={cx('container')}>
            <BannerIMG img={data.banner} title={data.title.toUpperCase()} descrip={data.description} bg='bg' type={data.type} color='black' date={data.date} by={data.author} number={data.comments.length} />
            <div className={cx('main')}>
                <div className={cx('main-top')}>
                    <div className={cx('author')}>
                        <Author />
                    </div>
                    <div className={cx('content')} dangerouslySetInnerHTML={{
                        __html: data.content1,
                    }}>
                    </div>
                </div>
                <Image src={data.galerry} alt='blog-travel' className={cx('img-banner')} />
                <div className={cx('main-bot')}>
                    <div className={cx('content')} dangerouslySetInnerHTML={{
                        __html: data.content2,
                    }}>

                    </div>
                    <div className={cx('main-end')}>
                        <div className={cx('tag-list')}>
                            {data.hash_tag.map((d, i) =>
                                <span key={i}>{d.toUpperCase()}</span>
                            )}
                        </div>
                        <div className={cx('share-list')}>
                            <span>Share</span>
                            <Share />
                        </div>
                    </div>
                </div>
                <div className={cx('comment-container')}>
                    <Comments />
                    <WriteComment />
                </div>


            </div>
            <Blogrecomment />

        </div>
    )
}

export default index