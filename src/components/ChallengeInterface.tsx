import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Star, Plus, X, QrCode, Camera } from "lucide-react";
import challengeHero from "@/assets/challenge-hero.jpg";
import treeGrowthProgress from "@/assets/tree-growth-progress.jpg";
import julianaAvatar from "@/assets/juliana-avatar.jpg";
interface Friend {
  id: string;
  name: string;
  avatar: string;
  points: number;
  status: "Active" | "Offline";
}
interface Participant {
  id: string;
  name: string;
  avatar: string;
  points: number;
  games: number;
  rank: number;
}
interface Message {
  id: string;
  sender: string;
  avatar: string;
  message: string;
  time: string;
  type: "message" | "nudge";
}
const ChallengeInterface = () => {
  const [activeTab, setActiveTab] = useState("Details");
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const friends: Friend[] = [{
    id: "1",
    name: "Juliana Arla",
    avatar: julianaAvatar,
    points: 399000,
    status: "Active"
  }, {
    id: "2",
    name: "Alyssa Claire",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    points: 272000,
    status: "Active"
  }, {
    id: "3",
    name: "James Liu",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    points: 678000,
    status: "Active"
  }];
  const participants: Participant[] = [{
    id: "1",
    name: "Net-roc Dev1",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    points: 3000,
    games: 0,
    rank: 1
  }, {
    id: "2",
    name: "Net-roc Dev7",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    points: 2000,
    games: 0,
    rank: 2
  }, {
    id: "3",
    name: "John Eduard",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    points: 1000,
    games: 0,
    rank: 3
  }, {
    id: "4",
    name: "Juliana Arla",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
    points: 0,
    games: 0,
    rank: 4
  }, {
    id: "5",
    name: "Alyssa Claire",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    points: 0,
    games: 0,
    rank: 5
  }, {
    id: "6",
    name: "Net-roc Dev2",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
    points: 0,
    games: 0,
    rank: 6
  }, {
    id: "7",
    name: "Net-roc Dev3",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    points: 0,
    games: 0,
    rank: 7
  }, {
    id: "8",
    name: "Net-roc Dev4",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    points: 0,
    games: 0,
    rank: 8
  }, {
    id: "9",
    name: "Net-roc Dev5",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=100&h=100&fit=crop&crop=face",
    points: 0,
    games: 0,
    rank: 9
  }, {
    id: "10",
    name: "Net-roc Dev6",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
    points: 0,
    games: 0,
    rank: 10
  }];
  const messages: Message[] = [{
    id: "1",
    sender: "John Eduard",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    message: "Hey! What's the status of your stage?",
    time: "Now",
    type: "message"
  }, {
    id: "2",
    sender: "Sponge Bob",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    message: "Sponge Bob Nudged You! Nudge back?",
    time: "2hrs",
    type: "nudge"
  }];
  const TabButton = ({
    label,
    isActive,
    onClick
  }: {
    label: string;
    isActive: boolean;
    onClick: () => void;
  }) => <Button variant={isActive ? "default" : "outline"} onClick={onClick} size="sm" className={`rounded-full px-3 py-1 text-xs flex-1 ${isActive ? "bg-primary text-primary-foreground" : "bg-white text-foreground border-border hover:bg-muted"}`}>
      {label}
    </Button>;
  const renderContent = () => {
    switch (activeTab) {
      case "Details":
        return <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-border">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-success rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">Go</span>
                </div>
                <span className="font-semibold">Plant-Based January</span>
              </div>
              
              <h2 className="text-xl font-bold mb-4">Challenge Criterias:</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full border-2 border-primary bg-primary"></div>
                    <span>Plant a tree.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-points fill-current" />
                    <span className="text-points font-semibold">1,000 Points</span>
                    <Button variant="default" size="sm" className="bg-primary text-primary-foreground">
                      Claim Reward
                    </Button>
                  </div>
                </div>
                
                <Progress value={100} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full border-2 border-muted bg-white"></div>
                    <span>Plant 5 trees.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-points fill-current" />
                    <span className="text-points font-semibold">1,000 Points</span>
                    <Button variant="outline" size="sm" className="border-muted text-muted-foreground" disabled>
                      Claim Reward
                    </Button>
                  </div>
                </div>
                
                <Progress value={0} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full border-2 border-muted bg-white"></div>
                    <span>Plant 10 trees.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-points fill-current" />
                    <span className="text-points font-semibold">1,000 Points</span>
                    <Button variant="outline" size="sm" className="border-muted text-muted-foreground" disabled>
                      Claim Reward
                    </Button>
                  </div>
                </div>
                
                <Progress value={0} className="h-2" />
              </div>
              
              <div className="space-y-3 mt-6">
                <Button variant="outline" className="w-full border-border text-foreground hover:bg-special hover:text-special-foreground" onClick={() => setShowRewardModal(true)}>
                  Request for Reward Contribution
                </Button>
                <Button variant="outline" className="w-full border-border text-foreground hover:bg-special hover:text-special-foreground relative" onClick={() => setShowRoleModal(true)}>
                  Received Invitations for a Special Role
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full"></div>
                </Button>
              </div>
            </div>
          </div>;
      case "Status":
        return <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-border">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {["Alyssa Claire", "Juliana Arla", "John Eduard", "Netroc Dev1", "Netroc Dev2", "Netroc Dev3", "Netroc Dev4", "Netroc Dev5", "Netroc Dev6", "Netroc Dev7"].map((name, index) => <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{name}</span>
                  </div>)}
              </div>
              
              <div className="flex space-x-4">
                <Button variant="default" className="bg-primary text-primary-foreground" onClick={() => setShowInviteModal(true)}>
                  Invite
                </Button>
                <Button variant="outline" className="hover:bg-[#A42138] hover:text-white" onClick={() => setShowQRModal(true)}>
                  QR Code
                </Button>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-center mb-4">Leaderboard</h3>
                <div className="space-y-2">
                  {participants.map((participant, index) => <div key={participant.id} className={`flex items-center justify-between p-3 rounded-lg ${index === 0 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-lg">{participant.rank}</span>
                        <img src={participant.avatar} alt={participant.name} className="w-8 h-8 rounded-full" />
                        <span className="font-medium">{participant.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-points fill-current" />
                        <span>{participant.points.toLocaleString()} Points</span>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>;
      case "Participate":
        return <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full border-2 border-muted bg-white"></div>
                    <span>Plant 5 trees.</span>
                  </div>
                  <Button variant="default" size="sm" className="bg-primary text-primary-foreground">
                    Submit
                  </Button>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex flex-col">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=80&h=80&fit=crop" alt="Tree planting" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">tree_sapling_01.jpg</div>
                  </div>
                  
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Plus className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full border-2 border-muted bg-white"></div>
                    <span>Plant 10 trees.</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-muted text-muted-foreground" disabled>
                    Submit
                  </Button>
                </div>
                
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Plus className="w-8 h-8 text-gray-400" />
                </div>
                
                <hr className="border-primary border-2" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <div className="w-3 h-3 rounded-full border-2 border-primary bg-primary"></div>
                      <span>Plant a tree.</span>
                    </div>
                    <span className="text-sm text-muted-foreground">January 10, 2025</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-muted text-muted-foreground" disabled>
                    Done
                  </Button>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex flex-col">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=80&h=80&fit=crop" alt="Planted tree" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">oak_tree_planted.jpg</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                      <img src={treeGrowthProgress} alt="Tree growth" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">tree_growth_progress.jpg</div>
                  </div>
                </div>
              </div>
            </div>
          </div>;
      case "Messages":
        return <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-semibold mb-4">Friends:</h3>
              <div className="space-y-4 mb-6">
                {friends.map(friend => <div key={friend.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full" />
                      <div>
                        <div className="font-semibold">{friend.name}</div>
                        <div className="text-sm text-muted-foreground">Status: {friend.status}</div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-points fill-current" />
                          <span className="text-points text-sm">{friend.points.toLocaleString()} Points</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="default" size="sm" className="bg-primary text-primary-foreground">
                        Message
                      </Button>
                      <Button variant="outline" size="sm" className="hover:bg-[#A42138] hover:text-white">
                        Nudge
                      </Button>
                    </div>
                  </div>)}
              </div>
              
              <Button variant="outline" className="w-full mb-6 hover:bg-[#A42138] hover:text-white">
                See All Friends
              </Button>
              
              <hr className="border-primary border-2 mb-6" />
              
              <h3 className="text-lg font-semibold mb-4">Received:</h3>
              <div className="space-y-4">
                {messages.map(message => <div key={message.id} className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <img src={message.avatar} alt={message.sender} className="w-12 h-12 rounded-full" />
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold">{message.sender}</span>
                          <span className="text-sm text-muted-foreground">{message.time}</span>
                          {message.time === "Now" && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">Status: Active</div>
                        <div className="flex items-center space-x-1 mb-2">
                          <Star className="w-3 h-3 text-points fill-current" />
                          <span className="text-points text-sm">5 Points</span>
                        </div>
                        <div className="text-sm">{message.message}</div>
                      </div>
                    </div>
                    <Button variant={message.type === "nudge" ? "default" : "default"} size="sm" className="bg-primary text-primary-foreground">
                      {message.type === "nudge" ? "Nudge Back" : "Reply"}
                    </Button>
                  </div>)}
              </div>
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <div className="max-w-md mx-auto bg-background min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Challenge Details</h1>
          
          {/* Hero Image */}
          <div className="relative mb-4">
            <img src={challengeHero} alt="Challenge Hero" className="w-full h-48 object-cover rounded-2xl" />
            
          </div>
          
          {/* Challenge Info */}
          <div className="bg-white rounded-2xl p-4 border border-border">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h2 className="text-xl font-bold">Plant-Based January</h2>
                <div className="text-sm text-muted-foreground">Jan 5-Jan 31</div>
                <div className="text-sm text-muted-foreground">by Go-Green SG</div>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-primary fill-current" />
                <span className="text-primary font-semibold">1267</span>
              </div>
            </div>
            
            <Badge variant="destructive" className="mb-3">
              Individual Challenge (Bundled)
            </Badge>
            
            <p className="text-sm text-muted-foreground mb-4">
              Grow and care for your own plants throughout January. Plant seeds, nurture them daily, and share your progress to promote greener living and a more sustainable environment.
            </p>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Challenge Rewards:</h3>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-points fill-current" />
                <span className="text-points font-semibold">3,000 Points</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex space-x-1 px-4 pb-4 justify-between">
          {["Details", "Status", "Participate", "Messages"].map(tab => <TabButton key={tab} label={tab} isActive={activeTab === tab} onClick={() => setActiveTab(tab)} />)}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {renderContent()}
      </div>

      {/* Modals */}
      <Dialog open={showRewardModal} onOpenChange={setShowRewardModal}>
        <DialogContent className="max-w-sm">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Request for Reward Contribution</h2>
              
            </div>
            
            <div className="space-y-4 mb-6">
              {[{
              name: "Juliana Arla",
              points: "399,000 Points",
              status: "Active",
              checked: true
            }, {
              name: "Alyssa Claire",
              points: "272,000 Points",
              status: "Active",
              checked: false
            }, {
              name: "John Eduard",
              points: "5 Points",
              status: "Active",
              checked: true
            }, {
              name: "Sponge Bob Square Pants",
              points: "123,458 Points",
              status: "Offline",
              checked: false
            }].map((person, index) => <div key={index} className="flex items-center space-x-3">
                  <Checkbox checked={person.checked} />
                  <img src={`https://images.unsplash.com/photo-${1500648767791 + index}?w=40&h=40&fit=crop&crop=face`} alt={person.name} className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <div className="font-semibold">{person.name}</div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-points fill-current" />
                      <span className="text-points text-sm">{person.points}</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    Status: <span className={person.status === "Active" ? "text-success" : "text-destructive"}>{person.status}</span>
                  </div>
                </div>)}
            </div>
            
            <div className="bg-muted rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span>Request for:</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-points fill-current" />
                  <span>▼</span>
                </div>
                <span>Quantity: 0</span>
              </div>
              <Textarea placeholder="Type your message here." className="bg-white" />
            </div>
            
            <Button className="w-full bg-primary text-primary-foreground">
              Send Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showRoleModal} onOpenChange={setShowRoleModal}>
        <DialogContent className="max-w-sm">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Received Invitations for a Special Role</h2>
              
            </div>
            
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-sm text-muted-foreground">3min</span>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="James Liu" className="w-10 h-10 rounded-full" />
                <span>James Liu invited you to be a Verifier!</span>
              </div>
              <div className="flex space-x-2">
                <Button variant="default" size="sm" className="bg-primary text-primary-foreground">
                  Accept
                </Button>
                <Button variant="outline" size="sm">
                  Decline
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showInviteModal} onOpenChange={setShowInviteModal}>
        <DialogContent className="max-w-sm">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Invite Friends</h2>
              
            </div>
            
            <div className="space-y-4 mb-6">
              {[{
              name: "Abi Falon",
              points: "299,000 Points",
              status: "Active",
              checked: false
            }, {
              name: "Jane Doe",
              points: "10,000 Points",
              status: "Active",
              checked: false
            }, {
              name: "James Sanchez",
              points: "203 Points",
              status: "Active",
              checked: false
            }, {
              name: "Dalton Pass",
              points: "34,203 Points",
              status: "Offline",
              checked: true
            }].map((person, index) => <div key={index} className="flex items-center space-x-3">
                  <Checkbox checked={person.checked} />
                  <img src={`https://images.unsplash.com/photo-${1494790108755 + index}?w=40&h=40&fit=crop&crop=face`} alt={person.name} className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <div className="font-semibold">{person.name}</div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-points fill-current" />
                      <span className="text-points text-sm">{person.points}</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    Status: <span className={person.status === "Active" ? "text-success" : "text-destructive"}>{person.status}</span>
                  </div>
                </div>)}
            </div>
            
            <Button className="w-full bg-primary text-primary-foreground">
              Invite
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showQRModal} onOpenChange={setShowQRModal}>
        <DialogContent className="max-w-sm">
          <div className="p-6 text-center">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">QR Code</h2>
              
            </div>
            
            <div className="bg-muted rounded-lg p-8 mb-6 flex items-center justify-center">
              <QrCode className="w-32 h-32 text-foreground" />
            </div>
            
            <Button className="w-full bg-primary text-primary-foreground">
              Share
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default ChallengeInterface;