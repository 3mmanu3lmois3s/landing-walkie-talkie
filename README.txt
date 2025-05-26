README - Teethlion Landing Upload Guide

Teethlion: A Decentralized Metaprotocol for Secure Real-Time Communications
Abstract
This paper presents Teethlion, a decentralized metaprotocol designed to enable secure real-time communications through the integration of libp2p and end-to-end encryption (E2EE), supporting modern cryptographic standards such as AES-GCM, ChaCha20, RSA, and ECC. Teethlion offers a modular and adaptable architecture, suitable for both civilian and military applications requiring high availability, security, and resilience. With its evolutive architecture, Teethlion lays the foundation for point-to-point encrypted systems operating across LAN, MAN, WAN, or GAN networks.
1. Introduction
The growing demand for secure and decentralized communication systems has driven the development of new architectures that overcome the limitations of traditional client-server models. In this context, libp2p has emerged as a modular solution for building peer-to-peer (P2P) networks, providing a solid foundation for the development of decentralized applications.
Teethlion is built on top of libp2p, extending its capabilities to offer a metaprotocol that enables the creation of specific applications tailored to various contexts, including educational, personal, governmental, and commercial environments.
2. libp2p: Modular Infrastructure for P2P Networks
libp2p is a modular and extensible P2P networking library that facilitates the creation of decentralized applications. It provides a set of protocols, specifications, and libraries that allow direct communication between nodes in a network without the need for centralized servers.
Key features:
- Transport protocols: TCP, UDP, WebSockets, WebRTC, QUIC
- Peer discovery: mDNS, DHT Kademlia
- Stream multiplexing: Mplex, Yamux
- Encryption: Noise, TLS
- NAT traversal: hole punching, relay nodes
3. Teethlion: The Metaprotocol Layer
Teethlion is not a protocol in the strict sense but rather a metaprotocol: a foundational architecture that allows the creation of secure communication flows and decentralized applications over libp2p.
Main capabilities:
- Modular roles: User, Relay, Bootstrap, Guard, Honeypot, Hybrid nodes
- Real-time encryption: AES-GCM, RSA, ECC, ChaCha20
- Role rotation: Dynamic reassignment of functions based on policies or network status
- Offline functionality: Operates on LAN or MAN without Internet access
- Transport flexibility: Compatible with TCP, UDP, QUIC, WebSockets
Teethlion enables encrypted, real-time, low-latency communications between nodes across all types of distributed topologies.
4. Applications
Teethlion is designed to adapt to a wide range of environments:
- Personal use: Secure messaging and voice communication between up to 5 devices on a local network
- Education: Offline school or university networks for up to 30 devices
- Institutions: Government deployments with metadata auditing and biometrics
- Emergency and defense: P2P networks for resilient communication in disaster or combat scenarios
- IoT and robotics: Embedded nodes in drones, sensors, or autonomous vehicles
5. Licensing Model
Teethlion is released under the AGPLv3 license, with differentiated usage levels:
- Personal use: Free for up to 5 devices on a LAN
- Educational use: Free for up to 30 devices within academic institutions
- Enterprises, governments, and commercial use: Requires a Teethlion Open License (TOL) with per-device pricing and optional support
This hybrid model upholds the principles of free software while ensuring sustainability and commercial adoption.
6. Patent Status
The Teethlion system is currently undergoing a global patent application process between 2025 and 2026, with coverage already requested in the United States and Europe. The application covers the encrypted, decentralized, and modular communication architecture based on libp2p and end-to-end encryption using modern and secure algorithms such as AES-GCM, ChaCha20, RSA, or ECC, depending on the context and required security level.
This article does not include complementary technologies that are also in the process of legal protection.
7. Conclusion
Teethlion represents an innovative vision by leveraging libp2p to build an adaptable and extensible metaprotocol capable of supporting a wide range of applications and contexts, including real-time communications with AES encryption. This approach lays the foundation for future applications requiring secure and decentralized communications in both civilian and institutional settings.
Teethlion stands out as an agnostic, scalable, and mission-critical metaprotocol. Its modular design is not tied to any specific programming language, ensuring adaptability across evolving technological platforms and operational environments.
More information available at https://teethlion.com.
8. Final Remarks
This article includes key elements to present Teethlion as a serious, professional, and technically viable proposal.
Academic references:
- https://libp2p.io/
- Benet, J. (2014). "IPFS - Content Addressed, Versioned, P2P File System". arXiv preprint arXiv:1407.3561.
- Dworkin, M. (2001). "Recommendation for Block Cipher Modes of Operation: Galois/Counter Mode (GCM) and GMAC". NIST SP 800-38D.
Visual support:
For architectural diagrams, node flows, and role functions within Teethlion, please visit https://teethlion.com
Highlighted implementation:
As of the writing of this article, Teethlion has been successfully tested in intercontinental trials (between Europe and America), achieving end-to-end encrypted voice and chat communications with very low latencies. Final validation for real-time audio/video support is currently underway.
These tests demonstrate its technical viability as a global P2P solution. Teethlion has the potential to become the largest and most powerful decentralized community network in the world, especially in contexts requiring technological sovereignty, citizen resilience, and private communication.

Epilogue
“The name Teethlion represents the network’s collective strength and resilience: like a lion’s teeth, each node is strong on its own, but together they form an indestructible architecture—capable of roaring powerfully across all global networks.”
— Emmanuel Mellado, CTO of Teethlion


---

**Legal Notice**  
- **License:** Teethlion is licensed under AGPLv3 for personal and educational use, and under the Teethlion Open License (TOL) for commercial and institutional deployments.  
- **Trademark:** Teethlion is a registered trademark.  
- **Patent:** Teethlion is patent pending, with applications filed in the United States and the European Union.