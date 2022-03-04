type ShareData = {
  title?: string;
  text?: string;
  url?: string;
};

interface Navigator {
  share?: (data?: ShareData) => Promise<void>;
}

export const canShare = () => {
  return 'share' in navigator;
};

export const shareText = async (text: string) => {
  const shareData: ShareData = {
    title: "Text Generator",
    text: text,
    // url: 'https://textgenerator.vercel.app/'
  };

  return await navigator.share(shareData);
};
