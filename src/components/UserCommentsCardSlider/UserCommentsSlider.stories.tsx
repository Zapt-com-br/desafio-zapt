import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import UserCommentsCardSlider, { UserCommentsCardSliderProps } from '.';

export default {
  title: 'UserCommentsSlider',
  component: UserCommentsCardSlider,
} as Meta;

export const UserCommentsSliderDefault: Story<UserCommentsCardSliderProps> = args => (
  <div style={{ width: '120rem', height: '40rem', margin: '20px' }}>
    <UserCommentsCardSlider {...args} />
  </div>
);

UserCommentsSliderDefault.args = {
  cardsData: [
    {
      userSubtext: 'São Paulo • São Paulo',
      username: '@Jhow',
      comment:
        '”Não consigo mais viver sem os produtos do Sítio, a diferença do que eu comprava antes e agora é abissal”',
      image: 'https://randomuser.me/api/portraits/men/18.jpg',
      backgroundImage:
        'https://i.insider.com/5cb8b133b8342c1b45130629?width=700',
    },
    {
      userSubtext: 'Belo Horizonte • Minas Gerais',
      username: 'Marcinho Ribeiro',
      comment:
        '”Depois que você começa a usar produtos de qualidade é bem difícil voltar atrás... ”',
      image: 'https://randomuser.me/api/portraits/men/40.jpg',
      backgroundImage: 'https://jooinn.com/images/people-9.jpg',
    },
    {
      userSubtext: 'subtext',
      username: '@LuisCarlos',
      comment: 'comentario de teste',
      image:
        'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
      backgroundImage: 'https://i.ytimg.com/vi/p7TDpx0hsn4/maxresdefault.jpg',
    },
  ],
};
