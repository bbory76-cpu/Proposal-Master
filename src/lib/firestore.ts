// ============================================================
// Firestore Data Models & Helper Functions — TEMPLATE
// ============================================================
// Firestore 컬렉션 구조와 CRUD 헬퍼 함수 정의
// ============================================================

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp,
  type DocumentData,
} from 'firebase/firestore';
import { db } from './firebase';

// ── Collection Names ──
export const COLLECTIONS = {
  USERS: 'users',
  PROPOSALS: 'proposals',
  ORDERS: 'orders',
  SUBSCRIPTIONS: 'subscriptions',
  PRODUCTS: 'products',
} as const;

// ── Data Types ──

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  subscription?: {
    planId: string;
    status: 'active' | 'cancelled' | 'expired';
    paypalSubscriptionId: string;
    startDate: Timestamp;
    endDate?: Timestamp;
  };
}

export interface Order {
  id: string;
  userId: string;
  productId: string;
  productName: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paypalOrderId: string;
  paypalPayerId?: string;
  createdAt: Timestamp;
  completedAt?: Timestamp;
}

export type ProposalStatus = 'draft' | 'generated' | 'exported' | 'archived';
export type ProposalType =
  | 'government_grant'
  | 'sales_proposal'
  | 'business_plan'
  | 'startup_pitch'
  | 'custom';

export interface ProposalDocument {
  id: string;
  userId: string;
  title: string;
  type: ProposalType;
  status: ProposalStatus;
  clientName?: string;
  organizationName?: string;
  summary: string;
  sourceNotes?: string;
  sections?: {
    problem?: string;
    solution?: string;
    executionPlan?: string;
    budget?: string;
    expectedImpact?: string;
  };
  docxUrl?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  exportedAt?: Timestamp;
}

export interface SubscriptionRecord {
  id: string;
  userId: string;
  planId: string;
  paypalSubscriptionId: string;
  status: 'active' | 'cancelled' | 'suspended' | 'expired';
  startDate: Timestamp;
  nextBillingDate?: Timestamp;
  cancelledAt?: Timestamp;
}

// ── Proposal Helpers ──

export async function createProposal(
  proposal: Omit<ProposalDocument, 'createdAt' | 'updatedAt'>
): Promise<void> {
  const ref = doc(db, COLLECTIONS.PROPOSALS, proposal.id);
  await setDoc(ref, {
    ...proposal,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function getProposal(proposalId: string): Promise<ProposalDocument | null> {
  const ref = doc(db, COLLECTIONS.PROPOSALS, proposalId);
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as ProposalDocument) : null;
}

export async function getUserProposals(userId: string): Promise<ProposalDocument[]> {
  const q = query(
    collection(db, COLLECTIONS.PROPOSALS),
    where('userId', '==', userId),
    orderBy('updatedAt', 'desc'),
    limit(50)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as ProposalDocument);
}

export async function updateProposal(
  proposalId: string,
  data: Partial<Omit<ProposalDocument, 'id' | 'userId' | 'createdAt'>>
): Promise<void> {
  const ref = doc(db, COLLECTIONS.PROPOSALS, proposalId);
  await updateDoc(ref, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function markProposalExported(proposalId: string, docxUrl?: string): Promise<void> {
  const ref = doc(db, COLLECTIONS.PROPOSALS, proposalId);
  await updateDoc(ref, {
    status: 'exported',
    docxUrl: docxUrl || null,
    exportedAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function deleteProposal(proposalId: string): Promise<void> {
  const ref = doc(db, COLLECTIONS.PROPOSALS, proposalId);
  await deleteDoc(ref);
}

// ── User Helpers ──

export async function createUserProfile(
  uid: string,
  data: Partial<UserProfile>
): Promise<void> {
  const ref = doc(db, COLLECTIONS.USERS, uid);
  await setDoc(ref, {
    uid,
    email: data.email || null,
    displayName: data.displayName || null,
    photoURL: data.photoURL || null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    ...data,
  });
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const ref = doc(db, COLLECTIONS.USERS, uid);
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as UserProfile) : null;
}

export async function updateUserProfile(
  uid: string,
  data: Partial<UserProfile>
): Promise<void> {
  const ref = doc(db, COLLECTIONS.USERS, uid);
  await updateDoc(ref, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

// ── Order Helpers ──

export async function createOrder(order: Omit<Order, 'createdAt'>): Promise<void> {
  const ref = doc(db, COLLECTIONS.ORDERS, order.id);
  await setDoc(ref, {
    ...order,
    createdAt: serverTimestamp(),
  });
}

export async function updateOrderStatus(
  orderId: string,
  status: Order['status'],
  paypalPayerId?: string
): Promise<void> {
  const ref = doc(db, COLLECTIONS.ORDERS, orderId);
  const updates: DocumentData = { status };
  if (status === 'completed') {
    updates.completedAt = serverTimestamp();
  }
  if (paypalPayerId) {
    updates.paypalPayerId = paypalPayerId;
  }
  await updateDoc(ref, updates);
}

export async function getUserOrders(userId: string): Promise<Order[]> {
  const q = query(
    collection(db, COLLECTIONS.ORDERS),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc'),
    limit(50)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as Order);
}

// ── Subscription Helpers ──

export async function createSubscriptionRecord(
  sub: Omit<SubscriptionRecord, 'startDate'>
): Promise<void> {
  const ref = doc(db, COLLECTIONS.SUBSCRIPTIONS, sub.id);
  await setDoc(ref, {
    ...sub,
    startDate: serverTimestamp(),
  });
}

export async function cancelSubscription(subscriptionId: string): Promise<void> {
  const ref = doc(db, COLLECTIONS.SUBSCRIPTIONS, subscriptionId);
  await updateDoc(ref, {
    status: 'cancelled',
    cancelledAt: serverTimestamp(),
  });
}

export async function getActiveSubscription(
  userId: string
): Promise<SubscriptionRecord | null> {
  const q = query(
    collection(db, COLLECTIONS.SUBSCRIPTIONS),
    where('userId', '==', userId),
    where('status', '==', 'active'),
    limit(1)
  );
  const snap = await getDocs(q);
  return snap.empty ? null : (snap.docs[0].data() as SubscriptionRecord);
}

// ── Product Helpers ──

export async function deleteProduct(productId: string): Promise<void> {
  const ref = doc(db, COLLECTIONS.PRODUCTS, productId);
  await deleteDoc(ref);
}
