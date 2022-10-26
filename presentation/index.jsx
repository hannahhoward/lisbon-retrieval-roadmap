// Import React
import React from 'react'
import '../assets/prism-tomorrow-ally.css'

// Import Spectacle Core tags
import { Deck, Notes } from 'spectacle'

// import AboutMeSlide from './slideTemplates/about-me-slide.jsx'
// import QuoteSlide from './slideTemplates/quote-slide.jsx'
import DefinitionSlide from './slideTemplates/definition-slide.jsx'
import ListSlide from './slideTemplates/list-slide.jsx'
import SimpleSlide from './slideTemplates/simple-slide.jsx'
import ConceptSlide from './slideTemplates/concept-slide.jsx'
import ImageSlide from './slideTemplates/image-slide.jsx'
// import DoubleImageSlide from './slideTemplates/double-image-slide.jsx'
// import QuotesSlide from './slideTemplates/quotes-slide.jsx'
// import FullImageSlide from './slideTemplates/full-image-slide.jsx'
import colors from './slideTemplates/colors'
// import CodeSlide from 'spectacle-code-slide'

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
        theme={theme}>
        <DefinitionSlide
          term="Retrieval Roadmapping"
          definition="How to get to 1 billion requests per week?"
          fit={false}>
          <Notes>
            <p>
              So for the next 45 minutes, we're gonna do some roadmapping for
              retrieval
            </p>
            <p>
              I'm gonna talk for about 20 to set the stage and put out some
              ideas, and then we'll do some collabarative planning together
            </p>
            <p>
              My basic thesis for retrieval is this: to serve reliable
              retrievals, we should go where the customers are... and solve
              their problems.
            </p>
          </Notes>
        </DefinitionSlide>
        <DefinitionSlide
          term="Retrieval"
          definition="Accessing data stored in IPFS and Filecoin"
          fit={false}>
          <Notes>
            <p>
              I'd like to take a minute to actually define retrieval before we
              go deep. I notice that we use this word and... although I work on
              retrieval full time I'm never quite sure if people I'm talking to
              understand it the way I do.
            </p>
            <p>
              So in my mind, retrieval simply means accessing data stored on
              IPFS and Filecoin.
            </p>
            <p>
              Bedrock has traditionally owned a specific type of retrieval --
              getting data directly from Storage Providers -- but I think our
              ultimate goal here is that the people can access all data on IPFS
              and Filecoin safely, reliably, and quickly.
            </p>
          </Notes>
        </DefinitionSlide>
        <ListSlide
          ordered={true}
          title="Retrieval Components"
          list={[
            'Data Transfer',
            'Incentives',
            'Access Control',
            'Query/Compute?',
            'Content Discovery?'
          ]}></ListSlide>
        <SimpleSlide statement="Retrieval Customers">
          <Notes>
            To get to massive scale retrieval, we need to make sure it works for
            everyone. So who might want to retrieve IPFS and Filecoin data?
          </Notes>
        </SimpleSlide>
        <ImageSlide inverted fit={true} title="Dapp Developer" image="nft.jpg">
          <Notes>
            <p>
              Pete is a Dapp Developer. He's building an NFT marketplace. He'd
              like the static NFT image assets he stored on Filecoin to display
              on his app's website, which is frequently viewed from mobile
              phones.
            </p>
            <p>
              What are Pete's retrieval needs like? Pete essentially wants a
              Web2 CDN like experience, for small static image assets. They need
              to load with low latency into a mobile environment with limited
              resources and poor connection. Most likely, Pete's data is not
              coming directly from SPs, and moreover, his users are not running
              the libp2p stack. He needs adequate transfer speeds, but also he's
              not moving huge amounts of data at a time.
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={true}
          title="Streaming Media Company"
          image="tropic-thunder.jpg">
          <Notes>
            <p>
              Tom runs a streaming media company. He wants to serve videos that
              he stores on Filecoin to his users. His users pay him flat
              subscription fees.
            </p>
            <p>
              What are Tom's retrieval needs like? Tom's top retrieval need is
              transfer speed -- he needs to have his data stream quick enough
              that the video keeps playing. Most likely the best way to do that
              will be to download from multiple providers at once. His data will
              need to be replicated in multiple places all around the world. Tom
              might be able to pay providers on a per retrieval basis, cause he
              has revenue from his subscription fees, but he also need the data
              protected from non-subscribers, and possibly encrypted even from
              providers. Tom needs some simple querying -- the ability to start
              and stop a video at a certain point, but his access patterns are
              generally fairly simple.
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={true}
          title="Academic Institution"
          image="jeff1.jpg">
          <Notes>
            <p>
              Jeff is a climate scients working with a large geographic data
              set, stored by his university on Filecoin. He wants to run queries
              on water table data at different locations around the world.
            </p>
            <p>
              What are Jeffs's retrieval needs like? Jeff is working with
              massive amounts of data, and his queries and access patterns are
              complex. Providers will need to transform raw data prior to
              serving relevant query results. At the same time, Jeff is probably
              used to a waiting a few seconds to get responses to his requests,
              and ultimately the data that gets transferred is not super large.
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={true}
          title="Collaborative Application User"
          image="sigourney.jpg">
          <Notes>
            <p>
              Sigourney is an office worker who uses a shared document editor to
              collaborate in real time with her co-workers - currently, they use
              Google docs, but would love to try a decentralized solution.
            </p>
            <p>
              Sigourney is working with real time data. She's not just accessing
              data in real time, she's modifying it. Her data is relatively
              small -- just text documents, but making real-time updates means
              it's unlikely to ever be stored directly on Filecoin. At the same
              time, with the right advanced IPLD data structures, it might work
              on IPFS.
            </p>
          </Notes>
        </ImageSlide>
        <ConceptSlide
          concept="Question"
          description="What do all these personas have in common">
          <Notes>
            <p>
              So I started thinking through these personas as a way to help us
              understand retrieval needs for different users.
            </p>
            <p>
              When I used to build web apps as a consultant, we'd use personas
              like these to think through different types of users and their
              needs.
            </p>
            <p>
              But then I noticed something they share in common... that's maybe
              more important
            </p>
          </Notes>
        </ConceptSlide>
        <SimpleSlide statement="They don't exist">
          <Notes>
            <p>And that's that none of them are real.</p>
            <p>
              We're not really serving any of these folks at the moment, at
              least from Filecoin. If I were to make a persona of actual current
              retrievals on Filecoin, it'd probably be a shot of me, Rod, and
              Kyle running autoretrieve.
            </p>
            <p>
              In a few months it might be an IPFS user accessing public
              Slingshot data through Bitswap
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide statement="Yet">
          <Notes>
            <p>
              So we have a ways to go. But some of these use cases also aren't
              that far away. There's a cryptoecon team trying to put geospatial
              data in filecoin and work with bacalau to run complex queries. NFT
              marketplaces aren't serving from Filecoin but they are serving
              from IPFS, albeit slowly. So how do we get to real use cases, and
              what specific expertise does Bedrock have?
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide statement="Starting Points">
          <Notes>So who is doing retrieval, and how can we help them?</Notes>
        </SimpleSlide>
        <SimpleSlide statement="Gateways">
          <Notes>
            <p>
              The single biggest existing retrieval portal for our networks is
              the IPFS Gateway.
            </p>
            <p>It serves over 1 billion retrieval requests</p>
            <p>
              Last I heard, the time to first byte is 14 seconds. That's rough.
            </p>
            <p>
              We've been just scratching the surface of making retrieval from
              Gateways better -- connecting them to Filecoin through Bitswap
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide statement="Saturn">
          <Notes>
            <p>
              The Saturn network is key to delivering successful retrievals.
            </p>
            <p>
              We know that we'd like to have Saturn serve retrievals from
              Filecoin. Helping Saturn to do this will likely be the Bedrock
              retrieval teams first task in 2023.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide statement="The case for working on data transfer">
          <Notes>
            <p>
              But after we enable Saturn I think it's time to start improve the
              core components of retrieval. I think we all agree that in 2023,
              we need to figure some things out about incentives. I'm hoping
              we'll solve all that on Thursday so I'm not gonna dig into that
              here.
            </p>
            <p>
              I want to make the case that incentives are critical, but not
              sufficient -- we need to transfer data much faster
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide statement="Speed matters">
          <Notes>
            <p>
              Study after study has shown that site responsiveness is critical
              to user retention
            </p>
            <p>
              And we know it's important cause web2 has spent a decade building
              huge servers that transfer data quickly and with low latency
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide statement="Our stuff sucks">
          <Notes>
            <p>
              One group of folks I find fascinating to talk to is IPFS Dapp
              developers
            </p>
            <p>
              Listen to B5, who's now building a Rust IPFS application, about
              why his previous company QRI failed.
            </p>
            <p>
              Or talk to the Fission folks, who now build core web3 technology
              but started as a Dapp for personal storage the challenges they
              face
            </p>
            <p>
              In both cases they each had to write new transfer protocols just
              to get adequate performance. That made them great developers who
              are now helping us fix our stack. But at least in QRI's case, the
              lost time killed the company
            </p>
            <p>
              The only reason we haven't hit these problems yet is that we've
              been just trying to get our SPs to serve data. And soon, when
              people try to build real applications on Filecoin, they're going
              to encounter them too. We know for example that Saturn L2 nodes
              running on home computers are not going to be an effective cache
              layer if we don't have good ways to transfer data.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide statement="It's an engineering problem Bedrock can solve">
          <Notes>
            <p>
              Incentives will be a priority for us in 2023. Our PMs are going to
              coordinate a lot of this work, and with engineers providing
              technical feedback. But I'm sure how much direct engineering time
              will be devoted to incentives, at least not in H1 2023. Meanwhile,
              we have on this team the companies top experts on IPLD and data
              transfer protocols. We need something to do, I think we should
              take this on.
            </p>
          </Notes>
        </SimpleSlide>
        <ImageSlide
          inverted
          title="Better data transfer"
          text="Moar Protocols?"
          image="protocols.png">
          <Notes>
            <p>
              But as the slide yesterday said, we've got check marks now! So is
              better transfer even more protocols? I don't think that it is. The
              key to faster data transfer, in my opinion, is to understand our
              data.
            </p>
          </Notes>
        </ImageSlide>
        <SimpleSlide inverted statement="Our data is content addressed">
          <Notes>
            <p>
              Every single piece of data in IPFS and Filecoin -- even Filecoin
              pieces -- is content addressed. CIDs uniquely identify the data
              they address, such that where the data comes from is not relevant
              to verify it's authenticity. This is totally different from Web2.
            </p>
          </Notes>
        </SimpleSlide>
        <DefinitionSlide
          inverted
          term="Multiparty Data Transfer"
          definition="Our Superpower">
          <Notes>
            <p>
              The fact that our data is content addressed should be the key to
              supercharged data transfer on our networks. It should unlock
              transfer speeds and latency that are not just as fast as Web2, but
              faster. Because we don't care where our data comes from, we should
              be able to download from multiple parties at once, cause we don't
              care where it comes from. We essentially can't do this with HTTP.
            </p>
            <p>
              We even have concrete evidence that multiparty transfer is faster
              -- the most well known deployment of multiparty data transfer
              client is Bittorrent, which often outperforms HTTP downloads in
              most cases, even though individual nodes in the Bittorrent network
              are much more underpowered than large scale HTTP servers.
            </p>
          </Notes>
        </DefinitionSlide>
        <SimpleSlide statement="why our protocols don't work">
          <Notes>
            <p>
              SO what happened. Why do we find ourselves shoehorning HTTP in
              everywhere just to make up for terrible speeds of our libp2p
              protocols?
            </p>
            <p>
              I'll talk more about how and why we should use HTTP with content
              addressed data in a second-- there are a number of reasons we
              should ALWAYS have an HTTP stack on hand. but one reason we
              shouldn't have to use it to make data transfer faster.
            </p>
            <p>So let's look our how our libp2p protocols went wrong.</p>
          </Notes>
        </SimpleSlide>
        <DefinitionSlide
          term="Bitswap"
          inverted
          definition="The Bittorrent that operates in an information vacuum">
          <Notes>
            <p>
              Bitswap is a multiparty transfer protocol, but it basically knows
              nothing about the data it's downloading, and this creates huge
              problems.
            </p>
            <p>
              With Bittorrent, when I'm about to download Tropic Thunder,
              legally of course, I start a list of peers that have and are
              serving the file, and complete DAG of the file except for the
              bottom most layer of blocks that make up the bytes of the actually
              movie.
            </p>
            <p>
              With Bitswap, I have none of this. I don't even understand really
              how blocks are related to one another, except sometimes blocks are
              group together as part of a nebulous "session".
            </p>
            <p>
              In the interest of making sure we download any data that we didn't
              ask for, we further slow down transfer by only requesting blocks
              from a single layer of the DAG at a time. This means we introduce
              huge numbers of roundtrips for certain types of DAGs.
            </p>
          </Notes>
        </DefinitionSlide>
        <DefinitionSlide
          inverted
          term="Graphsync"
          definition="HTTP for libp2p, but way more complicated">
          <Notes>
            <p>
              GraphSync is essentially an attempt to write a data transfer
              protocol that understands DAGs, so you can make much bigger
              requests. However, it essentially throws out the entire concept of
              multi-party transfer, opting for a point to point transfer with a
              single peer. "multipeer graphsync" was supposed to be a future
              add-on to the protocol, but it turns out splitting up requests at
              the DAG level among peers is a pretty hard problem, and we've
              never really gotten to it.
            </p>
          </Notes>
        </DefinitionSlide>
        <ListSlide
          inverted
          ordered={false}
          title="IPLD: Everything But The Kitchen Sink"
          list={['Codecs', 'Data Model', 'Schemas', 'ADLs', 'Selectors']}>
          <Notes>
            <p>
              Graphsync is a protocol that fully embraces IPLD, our core data
              model, at all levels. IPLD is extremely powerful -- it takes
              content addressed data from just files to storing complex
              structured data -- from which can build things like backend
              services for dynamic data. But it has a lot of moving parts...
            </p>
            <p>
              So quick survey by show of hands, who knows what a CID and block
              is?
            </p>
            <p>
              Who can define codecs, data models, schema, ADLs, and selectors
              are
            </p>
            <p>
              These concepts are amazingly powerful, but they require a lot of
              tooling to work with, much of which doesn't exist in any language
              but Go. It raises the conceptual lyft for using GraphSync a lot.
            </p>
          </Notes>
        </ListSlide>
        <DefinitionSlide
          inverted
          term="Selectors"
          definition="Compute over data before it was cool">
          <Notes>
            <p>
              Graphsync doesn't just understand DAGs -- it can execute Selector
              queries against them.
            </p>
            <p>
              Selectors are a complex arbitrary query language -- so complex
              they're almost like a proto-FVM.
            </p>
            <p>
              But do you really need that for data transfer? How many of you who
              are engineers have ever used a selector that isn't either a path
              or a whole DAG selector? My belief is this describes a lot of what
              we actually want.
            </p>
            <p>
              There probably are cases where you need complex computation prior
              to serving your data, but then you probably need a full
              Bacalau/IPVM/etc
            </p>
          </Notes>
        </DefinitionSlide>
        <SimpleSlide inverted statement="The Selector Goldilocks Problem">
          <Notes>
            <p>
              Given how complex selectors are, it's surprising how many
              situations there are where there's no selector that's just right.
              For example "enumerate a unix FS directory without actually
              reading the files". It suggests maybe the current selectors just
              have a design issue, and we may want to rewinds to start from
              scratch
            </p>
            <p>
              I've often thought maybe you don't need general purpose queries --
              you need protocols that work with certain types of data
            </p>
            <p>
              I often think the way Filecoin syncs the blockchain is a really
              interesting example. Does anyone what know what protocols Filecoin
              uses to sync the chain?
            </p>
            <p>
              Does anyone know that Graphsync originally was written to sync the
              Filecoin blockchain? Go-Filecoin even used it once. The problem is
              GraphSync didn't do effective multi-peer transfer, and moreover,
              selectors have a design issue that makes syncing the chain without
              a very complicated selector impossible. You can't even store the
              Filecoin chain natively on Filecoin if you're transferring over
              GraphSync cause of this selector bug.
            </p>
            <p>
              So writing a simple protocol to get lists of blocks in the chain
              and then syncing them with bitswap turned out to be the right
              approach
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide statement="maybe there's something there">
          <Notes>
            <p>
              I think this working, production example of fast datatransfer is
              actually a model of how we should be doing things.
            </p>
            <p>
              BlockSync speeds up Bitswap by providing it with the information
              it didn't have -- the list of blocks ahead of time that make up
              the BlockChain DAG.
            </p>
            <p>
              QRI ended up writing a protocol just like this to solve many of
              their data transfer challenges
            </p>
            <p>
              I call it the manifest pattern -- instead of beginning by
              requesting blocks, you begin by asking a remote to give you a
              manifest of blocks that you want
            </p>
            <p>
              Then you delegate to a block protocol like bitswap to actually get
              the blocks
            </p>
            <p>
              If you start with all the information you need about a DAG, you
              can fetch blocks MUCH more quickly. In fact, this is essentially
              what Bittorrent does
            </p>
            <p>
              Doing this properly without accidentally fetching a ton of
              incorrect data requires a few tricks around incremental
              verifiability, but it's not actually that hard to do
            </p>
            <p>
              Looking back I wish we wrote Graphsync this way. I've proposed
              that we make Graphsync serve requests with only metadata instead
              of blocks, and then fetch them with Bitswap. I called this concept
              Lightning Storm. It's a good idea, but I think we should think
              even more broadly -- we essentially should have manifest protocols
              and block protocols, and a core transfer verification loop that
              takes a remote manifest and makes block fetching calls, verifying
              incrementally against some local mechanism of traversal.
            </p>
          </Notes>
        </SimpleSlide>
        <ListSlide
          inverted
          ordered={false}
          title="Optimization"
          list={[
            'UnixFSSync?',
            'Metadata Storage',
            'Bloom Filters',
            'Erasure Coding'
          ]}>
          <Notes>
            <p>From here, there are so many ways to optimize our process</p>
            <p>
              First, from a baseline of manifests and blocks, maybe we just want
              a protocol that serves UnixFS manifests.
            </p>
            <p>
              If we're only serving manifests, maybe we want to start storing
              information about DAG structure apart from the blocks themselves,
              so we can execute a manifest query in O(1) time if the query is
              simple enough
            </p>
            <p>
              What about updates and synchronozation -- there are techniques
              there too! Already, Fission wrote a protocol called CARPool that
              uses BloomFilters to only send the missing parts of a DAG
            </p>
            <p>
              We also know a number of our partners are using erasure coding to
              speed up their retrievals. Erasure coding essentially provides
              systems of data redundancy among peers, making it much easier to
              maintain data speed if a single peer drops off.
            </p>
          </Notes>
        </ListSlide>
        <ImageSlide inverted image="technology.gif">
          <Notes>
            <p>
              In other words, we have the technology folks. Seriously, we can do
              make it much faster.
            </p>
          </Notes>
        </ImageSlide>
        <ConceptSlide
          concept="Claim"
          description="All of this can be done in pure HTTP">
          <Notes>
            <p>I want to throw a question out there</p>
            <p>There's nothing about transferring data that requires Libp2p</p>
            <p>
              Pure HTTP has a few limitations -- it's a request response
              protocol -- but you could essentially implement bitswap or
              graphsync or any other content addressed protocol with HTTP
            </p>
            <p>
              Libp2p is a huge lift for a number of different clients, languages
              and stacks. Should we do multi-party HTTP transfer of content
              addressed data?
            </p>
          </Notes>
        </ConceptSlide>
        <ConceptSlide
          concept="Claim"
          description="The first thing to do is measure">
          <Notes>
            <p>
              I've given you a bunch of hypothesis about data transfer, based on
              being in the protocols for 3-4 years myself. I believe however
              that nothing is real if it's not measured. If we start building,
              we should first build on our existing benchmarks -- we have these
              in autoretrieve and we have them in boost, but we probably need a
              full synthetic testbed like testground. Ultimately, data transfer
              speed is a continuous project, and it's important to establish
              performance as a benchmark that we think about always -- every PR
              should ideally be analyzed this way.
            </p>
          </Notes>
        </ConceptSlide>
      </Deck>
    )
  }
}
