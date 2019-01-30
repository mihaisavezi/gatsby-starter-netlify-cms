import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: null,
    thumbnail: null,
    caption: 'Spring is in the air',
    description:
      '(lalele, frezii, eucalipt, muşchi de copac şi o bucată de lemn)',
  },
  {
    id: '2',
    src: null,
    thumbnail: null,
    caption: 'More delicate than cashmere',
    description: '(hortensia, clopoţei de Texas, trandafiri vuvuzela, brunia)',
  },
  {
    id: '3',
    src: null,
    thumbnail: null,
    caption: 'No ordinary spring',
    description: '(clopoţei de Texas, liliac)',
  },
  {
    id: '4',
    src: null,
    thumbnail: null,
    caption: 'Seduction',
    description:
      '(bujori, ranunculus, lalele ice cream, trandafiri, dusty miller)',
  },
  {
    id: '5',
    src: null,
    thumbnail: null,
    caption: 'You had me at hello',
    description:
      '(trandafiri de grădină, dalii, liliac japonez, leucadendron, eucalipt)',
  },
  {
    id: '6',
    src: null,
    thumbnail: null,
    caption: 'Together',
    description:
      '(halleborus, clopoţei de Texas, trandafiri vuvuzela, trandafiri tros)',
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const { site, galleryImages } = this.props.data

    const siteTitle = site.siteMetadata.title
    const siteDescription = site.siteMetadata.description

    const images = galleryImages.edges
    images.map((img, index) => {
      DEFAULT_IMAGES[index].src = img.node.childImageSharp.sizes.src
      DEFAULT_IMAGES[index].thumbnail = img.node.childImageSharp.resize.src
    })

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Floripedia - Florile noastre, emotiile tale</h2>
            </header>
            <p>
              Pentru că poveştile nu înseamnă doar cuvinte scrise pe pagini
              albe. Poveştile noastre au culori, mirosuri şi sunt despre tine.
              Buchetul ăla simplu ce mirosea a bujori şi a primăvară, pe care
              l-ai ţinut în mână când ai intrat în biserică alături de el. Sau
              explozia de flori colorate din ziua în care ai plâns de fericire.
              Sau geanta plină de flori cu care ai atras toate privirile şi
              toată admiraţia lumii.
            </p>
            <ul className="actions">
              <li>
                <a href="#three" className="button special big">
                  Vreau un aranjament
                </a>
              </li>
              `
            </ul>
          </section>

          <section id="two">
            <h2>Cele mai recente</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Poveştile noastre poartă culorile şi emoţiile tale. Florile
              noastre nu durează o veşnice. Dar nu-i aşa ca de fiecare dată când
              vei mirosi un bujor, îţi vei aminti de o emoţie a ta, prinsă de
              noi într-un buchet creat special pentru tine?.
            </p>

            <iframe
              className="google-form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeLPWexAmRphhVVpsfEhYwZE5a6td_RfjHvnf2i0zI4ZA_Mzw/viewform?embedded=true"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading...
            </iframe>

            {/* <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
          </section>
        </div>
      </div>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    galleryImages: allFile(filter: { relativePath: { glob: "gallery/*.*" } }) {
      edges {
        node {
          childImageSharp {
            resize(width: 350, height: 250, rotate: 180) {
              src
            }
            sizes(maxWidth: 800) {
              src
            }
          }
        }
      }
      totalCount
    }
  }
`
