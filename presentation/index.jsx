// Import React
import React from 'react'
import '../assets/prism-tomorrow-ally.css'

// Import Spectacle Core tags
import { Deck, Notes } from 'spectacle'

import AboutMeSlide from './slideTemplates/about-me-slide.jsx'
import QuoteSlide from './slideTemplates/quote-slide.jsx'
import DefinitionSlide from './slideTemplates/definition-slide.jsx'
import ListSlide from './slideTemplates/list-slide.jsx'
import SimpleSlide from './slideTemplates/simple-slide.jsx'
import ConceptSlide from './slideTemplates/concept-slide.jsx'
import ImageSlide from './slideTemplates/image-slide.jsx'
import DoubleImageSlide from './slideTemplates/double-image-slide.jsx'
import QuotesSlide from './slideTemplates/quotes-slide.jsx'
import FullImageSlide from './slideTemplates/full-image-slide.jsx'
import colors from './slideTemplates/colors'
import CodeSlide from 'spectacle-code-slide'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'
preloader({})

// Require CSS
require('normalize.css')
// use colors in slideTemplates/colors.js to construct theme
const theme = createTheme(colors, {
  primary: 'Aileron',
  secondary: 'Source Serif Pro'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <AboutMeSlide>
          <Notes>
            <p>Hi everyone!</p>
            <p>
              My names Hannah. I'm one of the primary authors of the markets
              software that manages deals in Filecoin. You can find me on the
              internet @techgirlwonder. And I use she her pronouns
            </p>
            <p>
              I work for Carbon Five. We're a product development agency that
              works with all kinds of clients from startups to enterprise,
              helping them turn their ideas into software. We're hiring and
              hirable, so come find us afterward if you're interested
            </p>
          </Notes>
        </AboutMeSlide>
        <ImageSlide
          inverted
          fit={true}
          title="Diving Into Filecoin Storage"
          image="deep-diver.jpg"
        >
          <Notes>
            In this talk we're going do a deep dive in to the process of putting
            data into the Filecoin network for storage.
          </Notes>
        </ImageSlide>
        <ListSlide
          ordered={false}
          title="Objectives"
          list={[
            'Understand architectural goals',
            'Recognize data transformations in storage',
            'Learn some tips and tricks'
          ]}
        >
          <Notes>
            <p>Here's what I hope you'll get out of this talk</p>
            <p>By the end of this talk, you should be able to...</p>
            <p>Understand Architectural Goals Of The Filecoin Storage Market</p>
            <p>
              Recognize The Transformations Your Data Goes Through As It Moves
              Into Filecoin Storage
            </p>
            <p>
              Learn som tips and tricks for making sure deals you make in
              filecoin are successful -- and knowing what to do if they aren't
            </p>
          </Notes>
        </ListSlide>
        <ImageSlide
          inverted
          fit={true}
          title="Trustless Environment"
          image="grandma.jpg"
        >
          <Notes>
            <p>
              So to get started, let's talk a little bit about the environment
              for filecoin deals
            </p>
            <p>
              A traditional data storage environment is entirely based on
              reputation and trust
            </p>
            <p>
              The only real reason we think Amazon will store our data is cause
              they're Amazon
            </p>
            <p>
              In the Filecoin environment, we don't want to rely on trust. We
              want to rely on each party demonstrating they're behaving properly
              at each step, in a way that is mathematically provable
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={true}
          title="Storage Market"
          image="marketplace3.jpg"
        >
          <Notes>
            <p>Storage on Filecoin truly is a like an market or bazaar</p>
            <p>
              Let's think about how deals get made in these kinds of situations
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide inverted fit={true} title="Discovery" image="vendors.jpg">
          <Notes>
            <p>First, you browse the vendors and see what's available</p>
          </Notes>
        </ImageSlide>
        <ImageSlide inverted fit={true} title="Negotiation" image="haggle.jpg">
          <Notes>
            <p>
              Next, you find someone who you think is a good vendor and you
              haggle over the price
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide inverted fit={true} title="Transfer" image="overloaded.jpg">
          <Notes>
            <p>
              Now if you're paying someone to store your stuff, you gotta move
              your stuff over to them
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={true}
          title="Sealing The Deal"
          image="exchange.jpg"
        >
          <Notes>
            <p>
              At this point, it's time for everyone to commit to your deal - we
              make some kind of contract and it's in writing. Through this
              exchange everyone is now onboard
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide inverted fit={true} title="Verifying" image="storage.png">
          <Notes>
            <p>
              Lastly, in Filecoin, you're paying for a service -- someone's
              storing your data, and you paying them at regular intervals, and
              you want to make sure they've got the right stuff
            </p>
          </Notes>
        </ImageSlide>
        <ListSlide
          ordered={false}
          appear={true}
          title="Steps In A Deal"
          list={[
            'Discovery',
            'Negotiation',
            'Transfer',
            'Sealing The Deal',
            'Verifying'
          ]}
        >
          <Notes>
            <p>So here are our steps</p>
          </Notes>
        </ListSlide>
        <ListSlide
          transition={['fade']}
          ordered={false}
          appear={false}
          title="In Filecoin Terms..."
          list={[
            'Discovery',
            'Negotiation',
            'Transfer',
            'Publishing',
            'Proving'
          ]}
        >
          <Notes>
            <p>
              And these are the basic steps of the Filecoin deal -- though we
              refer to the point we seal our agreement as publishing, and we
              refer to the final stage, where storage is verified and funds are
              incrementally transferred as Proving.
            </p>
          </Notes>
        </ListSlide>
        <SimpleSlide statement="Goals At Each Step" />
        <ConceptSlide
          fit={false}
          concept="Discovery"
          description="Provider offer parameters are verifiable"
        >
          <Notes>
            As we discover providers, and ask them what parameters they are
            offering for deals, we're going to make sure their offers are
            cryptographically signed so we know a malicious party isn't falsely
            advertising on their behalf
          </Notes>
        </ConceptSlide>
        <ConceptSlide
          fit={false}
          concept="Negotiation"
          description="Provider has what it needs except data"
        >
          <Notes>
            We want to make sure that when a client proposes a deal, and the
            provider agrees to a data transfer, they can't just backout after an
            expensive transfer operation. So our proposals contain everything
            The provider needs to publish the deal except the data itself,
            include a cryptographic signature from the client
          </Notes>
        </ConceptSlide>
        <ConceptSlide
          fit={false}
          concept="Transfer"
          description="Transfer is verifiable, incrementally"
        >
          <Notes>
            A provider shouldn't do an expensive data transfer only to find out
            they got the wrong data. So our transfer needs to be verifiable, and
            ideally, it should be verifiable incrementally. So all of our
            transport protocols for deals verify what is transferred
          </Notes>
        </ConceptSlide>
        <ConceptSlide
          fit={false}
          concept="Publishing"
          description="No deal is published that cannot be fulfilled or refunded"
        >
          <Notes>
            When we publish, we need several gaurantees. A provider needs to
            know the client has the money to pay for the deal. A provider needs
            to know they have the exact data they need to store. A client needs
            to know if the deal fails down the line, the provider can pay the
            client back for unstored time We use an escrow system -- prior to
            publishing each party puts funds in escrow, and when the deal is
            published, those funds become locked, and are released as the deal
            is proven over time.
          </Notes>
        </ConceptSlide>
        <ConceptSlide
          fit={false}
          concept="Proving"
          description="Only pay when storage is verified"
        >
          <Notes>
            Once the deal is published, a client should only pay money for
            storing if the provider can prove they are still holding the data.
          </Notes>
        </ConceptSlide>
        <SimpleSlide inverted statement="But wait...">
          <Notes>
            Now, we've talk a lot about the deal process, but we left something
            out...
          </Notes>
        </SimpleSlide>
        <ImageSlide
          inverted
          title="How does data get into filecoin?"
          image="curb.gif"
        >
          <Notes>
            We haven't actually talked about how data gets into filecoin
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          image="kitten.jpg"
          title="Start with system file"
          text="catpix.gif"
        >
          <Notes>
            <p>
              So let's say we start with a file on our system -- in the grand
              tradition of the internet, it's a cat picture. Now, we want to put
              it in filecoin
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          image="merkledag_hashes.png"
          title="IPLD DAG"
          text="Identified by Payload CID"
        >
          <Notes>
            <p>
              In the first stage of this transformation, the system file is
              chunked up with UnixFS to create an IPLD DAG (Directed Acyclic
              Graph). You may have heard about IPLD more in the earlier talk.
              This IPLD DAG is identified payload CID, which represents the root
              of the DAG. At this point the format of the data is the same as it
              is in IPFS. This is also the format we'll transfer the data in.
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          image="piece.png"
          title="Piece"
          text="Identified by Piece CID"
        >
          <Notes>
            <p>
              The IPLD DAG is then serialized to a CAR file and bit padded to
              make a Filecoin Piece. (Bit padding adds extra bits to make the
              piece conform to a standard size.) This piece has a unique piece
              CID, also known as a CommP (Piece Commitment). The piece is what
              the storage provider commits to storing.
            </p>
          </Notes>
        </ImageSlide>
        <ListSlide
          ordered={false}
          title="Other important transformations"
          list={[
            'Unsealed Sector: Identified By CommD',
            'Sealed Sector: Identified By CommR'
          ]}
        >
          <Notes>
            <p>
              There are two other types of data in Filecoin and while we won't
              get deep into this part of the process it's good to know what they
              are.
            </p>
            <p>
              Once a deal is agreed upon, the miner packs one or more deals
              together into a sector, which is identified by the value CommD
            </p>
            <p>
              Finally a miner takes a sector and applies a sealing process to
              generate a unique copy, which we call a sealed sector, and this is
              identified by the value CommR
            </p>
          </Notes>
        </ListSlide>
        <ImageSlide
          inverted
          title="Some terminology"
          image="excuse-me.png"
        ></ImageSlide>
        <DefinitionSlide
          inverted
          fit={false}
          term="Storage Client"
          definition="Party that wants to make a deal to store data"
        >
          <Notes>
            We call the party that's storing data the client or storage client.
          </Notes>
        </DefinitionSlide>
        <DefinitionSlide
          inverted
          fit={false}
          term="Storage Provider"
          definition="Party that will store the data in exchange for payment"
        >
          <Notes>
            We call the party, in this case a miner, who will store the data in
            exchange for payment a provider or storage provider.
          </Notes>
        </DefinitionSlide>
        <ImageSlide
          inverted
          fit={false}
          image="scrooge.gif"
          title="Storage Market Actor"
          text="The on-chain component of deals."
        >
          <Notes>
            The StorageMarketActor is not, despite the name, a person. It's
            software in the Filecoin VM and it's on chain The market actor,
            cause it's hardcoded software in the Filecoin VM, is our trusted
            broker -- it manages escrow and a ledger for all deals made.
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          image="bernie2.jpg"
          title="Storage Ask"
          text="Price and parameters a miner is currently offering"
        >
          <Notes>
            The StorageAsk what we call the current deal parameters a miner is
            offering for a deal.
            <p>
              You can think of it as analogous to an Ask in a financial market
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          image="proprosal.gif"
          title="Storage Deal Proposal"
          text="Signed proposal for a storage deal"
        >
          <Notes>
            <p>
              {' '}
              StorageDealProposal is a proposal for a storage deal, signed only
              by the Storage client
            </p>
            <p>
              it's the clients commitment to moving forward with the deal once
              the provider has data
            </p>
          </Notes>
        </ImageSlide>
        <DefinitionSlide
          inverted
          fit={false}
          term="Storage Deal"
          definition="Deal that acccepted and on chain"
        >
          <Notes>
            When the provider submits the signed proposal from the client with
            their own signature, it goes on chain and becomes a sotrage deal
          </Notes>
        </DefinitionSlide>
        <SimpleSlide statement="Deal Negotiation Step By Step" />
        <SimpleSlide statement="Live Demo! Making a deal!" />
      </Deck>
    )
  }
}
