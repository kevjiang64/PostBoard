import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [loadingState, setLoadingState] = useState<
    "updoot-loading" | "downdoot-loading" | "not-loading"
  >();

  console.log(post);

  const [, vote] = useVoteMutation();
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" mr={4}>
      <IconButton
        onClick={async () => {
          if (post.voteStatus === 1) {
            return;
          }
          setLoadingState("updoot-loading");
          await vote({
            postId: post.id,
            value: 1,
          });
          setLoadingState("not-loading");
        }}
        colorScheme={post.voteStatus === 1 ? "green" : "gray"}
        isLoading={loadingState === "updoot-loading"}
        aria-label="updoot-post"
        icon={<ChevronUpIcon />}
        boxSize="24px"
      />
      {post.points}
      <IconButton
        aria-label="downdoot post"
        onClick={async () => {
          if (post.voteStatus === -1) {
            return;
          }

          setLoadingState("downdoot-loading");
          await vote({
            postId: post.id,
            value: -1,
          });
          setLoadingState("not-loading");
        }}
        colorScheme={post.voteStatus === -1 ? "red" : "gray"}
        isLoading={loadingState === "downdoot-loading"}
        icon={<ChevronDownIcon />}
        boxSize="24px"
      />
    </Flex>
  );
};
