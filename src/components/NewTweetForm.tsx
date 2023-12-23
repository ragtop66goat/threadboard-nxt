import ProfileImage from "~/components/ProfileImage";
import Button from "~/components/Button";
import {useSession} from "next-auth/react";

export default function NewTweetForm(){
  const session = useSession()

  if(session.status !== "authenticated") return;

  return (
    <form className="flex flex-col gap-2 border-b px-4">
      <div className="flex gap-4">
        <ProfileImage src={session.data.user.image}/>
        <textarea className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none" placeholder="What's happening?"/>
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  )
}