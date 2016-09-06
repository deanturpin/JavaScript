var lines = [
"22:25:27.844764 IP6 dev.mdns > ff02::fb.mdns: 0 [2q] PTR (QM)? _ipps._tcp.local. PTR (QM)? _ipp._tcp.local. (45)",
"22:25:28.013198 IP dev.6764 > gateway.domain: 62408+ PTR? b.f.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.2.0.f.f.ip6.arpa. (90)",
"22:25:28.070843 IP gateway.domain > dev.6764: 62408 NXDomain 0/1/0 (160)",
"22:25:28.073835 IP dev.8571 > gateway.domain: 33630+ PTR? 0.d.9.f.a.4.1.9.f.8.d.e.a.4.3.c.0.0.0.0.0.0.0.0.0.0.0.0.0.8.e.f.ip6.arpa. (90)",
"22:25:28.131435 IP gateway.domain > dev.8571: 33630 NXDomain* 0/1/0 (139)",
"22:25:28.181781 IP dev.57218 > wj-in-f189.1e100.net.https: Flags [P.], seq 2778959233:2778959533, ack 1786508450, win 245, options [nop,nop,TS val 6952028 ecr 2719943255], length 300",
"22:25:28.182313 IP dev.57218 > wj-in-f189.1e100.net.https: Flags [P.], seq 300:641, ack 1, win 245, options [nop,nop,TS val 6952028 ecr 2719943255], length 341",
"22:25:28.250825 IP wj-in-f189.1e100.net.https > dev.57218: Flags [.], ack 641, win 1538, options [nop,nop,TS val 2719944572 ecr 6952028], length 0",
"22:25:28.260852 IP wj-in-f189.1e100.net.https > dev.57218: Flags [P.], seq 1:81, ack 641, win 1538, options [nop,nop,TS val 2719944583 ecr 6952028], length 80",
"22:25:28.260899 IP dev.57218 > wj-in-f189.1e100.net.https: Flags [.], ack 81, win 245, options [nop,nop,TS val 6952048 ecr 2719944583], length 0",
"22:25:28.260960 IP wj-in-f189.1e100.net.https > dev.57218: Flags [P.], seq 81:377, ack 641, win 1538, options [nop,nop,TS val 2719944584 ecr 6952028], length 296",
"22:25:28.260975 IP dev.57218 > wj-in-f189.1e100.net.https: Flags [.], ack 377, win 254, options [nop,nop,TS val 6952048 ecr 2719944584], length 0",
"22:25:28.264054 IP dev.57218 > wj-in-f189.1e100.net.https: Flags [P.], seq 641:687, ack 377, win 254, options [nop,nop,TS val 6952049 ecr 2719944584], length 46",
"22:25:28.360675 IP wj-in-f189.1e100.net.https > dev.57218: Flags [.], ack 687, win 1538, options [nop,nop,TS val 2719944682 ecr 6952049], length 0",
"22:25:28.748640 IP dev.mdns > 224.0.0.251.mdns: 0 PTR (QM)? _googlecast._tcp.local. (40)",
"22:25:28.748792 IP6 dev.mdns > ff02::fb.mdns: 0 PTR (QM)? _googlecast._tcp.local. (40)",
"22:25:28.749025 IP dev.mdns > 224.0.0.251.mdns: 0 PTR (QM)? _googlecast._tcp.local. (40)",
"22:25:28.749137 IP6 dev.mdns > ff02::fb.mdns: 0 PTR (QM)? _googlecast._tcp.local. (40)",
"22:25:29.011833 IP dev.3066 > gateway.domain: 14506+ PTR? 1.1.168.192.in-addr.arpa. (42)",
"22:25:29.067880 IP6 dev > ip6-allrouters: ICMP6, router solicitation, length 8",
]

while (l = lines.pop()) {

	// Extract the time
	time = l.split(" ").shift()

	match = /([^ ]+) ([<>]) ([^ ]+)/.exec(l)

	if (match) {
		left = match[1].split(".").shift()
		direction = match[2]
		right = match[3]
	}

	console.log(time, left, direction, right)
}
