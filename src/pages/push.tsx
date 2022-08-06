import { useGameContext } from '@/context/GameContext';
import { trpc } from '@/utils/trpc';
import { Button, Container } from '@mantine/core';
import { NextPage } from 'next';
import router from 'next/router';

let first: boolean = true;

const Push: NextPage = () => {
  const { getGame, resetGame } = useGameContext();
  const game = getGame();

  if (first) {
    if (game === undefined) return <Container
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    }}
  >
    <div>**</div>
    <Button 
      onClick={() => {
        resetGame();
        router.back();
      }}
    >Return To Home</Button>
  </Container>

    const { isLoading, error, mutate } = trpc.useMutation('scout.push');  
    mutate(game);
    if (error) return <div>Error: {error.message}</div>

    if (isLoading) return <div>Loading...</div>
    first = false;
    resetGame();
  }
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70%',
      }}
    >
      <Button 
        onClick={() => {
          resetGame();
          router.back();
        }}
      >Return To Home</Button>
    </Container>
  )
}

export default Push;