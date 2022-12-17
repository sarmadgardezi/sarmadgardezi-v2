import {GridItem, Link, Grid, Image, LinkBox } from '@chakra-ui/react';
const Logos = () => {
  return (
<Grid gap={{ base: 3, lg: 3 }}
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(4, 2fr)",
                  sm: "repeat(3, 2fr)",
                }}
                >
    <GridItem  w='60%' h='10'>
  <Image src='/logos/03.png' />
        </GridItem>
        <GridItem  w='60%' h='10'>
        <Link href='https://gdg.community.dev/u/mbkmt8/' isExternal> <Image src='/logos/PremierBadgeClickable.svg' /></Link>
        </GridItem>
  </Grid>
  );
};

export default Logos;
